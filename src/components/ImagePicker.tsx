import React from "react";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { camera } from "ionicons/icons";
import "./ImagePicker.css";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Capacitor } from "@capacitor/core";
import { Photo } from "types/photoType";

interface Props {
  onImagePick: (photo: Photo) => void;
}

const ImagePicker: React.FC<Props> = ({ onImagePick }) => {
  const [takenPhoto, setTakenPhoto] = React.useState<Photo>();

  const filePickerRef = React.useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    filePickerRef.current!.click();
  };

  const pickFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target!.files![0];
    const fr = new FileReader();
    fr.onload = () => {
      const photo: Photo = { path: undefined, preview: fr.result!.toString() };
      setTakenPhoto(photo);
      onImagePick(photo);
    };
    fr.readAsDataURL(file);
  };

  const takePhotoHandler = async () => {
    if (!Capacitor.isPluginAvailable("Camera")) {
      console.log("camera is not available");
      openFilePicker();
      return;
    }
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 80,
        width: 500,
      });

      if (!photo || !photo.webPath) return;
      const pickedPhoto: Photo = {
        path: photo.path,
        preview: photo.webPath,
      };
      setTakenPhoto(pickedPhoto);
      onImagePick(pickedPhoto);
    } catch (error) {
      if (Capacitor.isPluginAvailable("Camera")) return;
      console.log("some error " + error);
      openFilePicker();
    }
  };
  return (
    <>
      <div className="image-preview">
        {!takenPhoto ? (
          <h3>No Photo Choosen.</h3>
        ) : (
          <img src={takenPhoto.preview} alt="Preview" />
        )}
      </div>
      <IonButton fill="clear" onClick={takePhotoHandler}>
        <IonIcon icon={camera} slot="start" />
        <IonLabel>Take Photo</IonLabel>
      </IonButton>
      <input
        type="file"
        hidden
        ref={filePickerRef}
        onChange={pickFileHandler}
      />
    </>
  );
};

export default ImagePicker;
