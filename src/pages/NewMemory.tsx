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
import { useMemoriesContextProvider as contextProvider } from "../contextStore/memories-context";
import { ImagePicker } from "components";
import { Photo } from "types/photoType";
import { MemoryType } from "types/memoriesType";

const NewMemory: React.FC = () => {
  const [takenPhoto, setTakenPhoto] = React.useState<Photo>();
  const [choosenMemoryType, setChoosenMemoryType] =
    React.useState<MemoryType>("good");
  const memoriesCtx = contextProvider();
  const history = useHistory();

  const titleInputRef = React.useRef<HTMLIonInputElement>(null);

  const photoPickerHandler = (photo: Photo) => {
    setTakenPhoto(photo);
  };

  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChoosenMemoryType(selectedMemoryType);
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

    memoriesCtx.addMemory(
      takenPhoto,
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
              <ImagePicker onImagePick={photoPickerHandler} />
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
