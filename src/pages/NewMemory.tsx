import React from "react";
import { useHistory } from "react-router-dom";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import "./NewMemory.css";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { base64FromPath } from "@ionic/react-hooks/filesystem";
import { useMemoriesContextProvider as contextProvider } from "../contextStore/memories-context";
import { Capacitor } from "@capacitor/core";

const NewMemory: React.FC = () => {
  const [takenPhoto, setTakenPhoto] =
    React.useState<{ path: string | undefined; preview: string }>();
  const [choosenMemoryType, setChoosenMemoryType] = React.useState<
    "good" | "bad"
  >("good");
  const memoriesCtx = contextProvider();
  const history = useHistory();

  const titleInputRef = React.useRef<HTMLIonInputElement>(null);
  const filePickerRef = React.useRef<HTMLInputElement>(null);

  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChoosenMemoryType(selectedMemoryType);
  };

  const openFilePicker = () => {
    filePickerRef.current!.click();
  };

  const pickFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target!.files![0];
    const fr = new FileReader();
    fr.onload = () => {
      setTakenPhoto({ path: undefined, preview: fr.result!.toString() });
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

      setTakenPhoto({
        path: photo.path,
        preview: photo.webPath,
      });
    } catch (error) {
      if (Capacitor.isPluginAvailable("Camera")) return;
      console.log("some error " + error);
      openFilePicker();
    }
  };

  const addMemoryHandler = async () => {
    const enteredTitle = titleInputRef.current?.value;

    if (
      !enteredTitle ||
      enteredTitle.toString().trim().length === 0 ||
      !takenPhoto ||
      !choosenMemoryType
    )
      return;

    const fileName = new Date().getTime() + ".jpeg";
    const base64 = await base64FromPath(takenPhoto!.preview);
    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });

    memoriesCtx.addMemory(
      fileName,
      base64,
      enteredTitle.toString(),
      choosenMemoryType
    );
    history.length > 0 ? history.goBack() : history.replace("/good-memories");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/good-memories" />
          </IonButtons>
          <IonTitle>Add New Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Memory Title</IonLabel>
                <IonInput type="text" ref={titleInputRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol className="ion-text-center" size="4" offset="4">
              <IonSelect
                value={choosenMemoryType}
                onIonChange={selectMemoryTypeHandler}
              >
                <IonSelectOption value="good">Good Memory</IonSelectOption>
                <IonSelectOption value="bad">Bad Memory</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
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
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol className="ion-text-center">
              <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
