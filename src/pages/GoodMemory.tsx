import React from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useMemoriesContextProvider as contextProvider } from "../contextStore/memories-context";
import MemoriesList from "components/MemoriesList";

const GoodMemory: React.FC = () => {
  const memoriesCtx = contextProvider();

  const goodMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "good"
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Good Memories</IonTitle>
          {isPlatform("ios") && (
            <IonButtons slot="end">
              <IonButton routerLink="/new-memory">
                <IonIcon icon={add} slot="icon-only" />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {goodMemories.length === 0 ? (
            <IonRow>
              <IonCol>
                <h2>No Good Memories Found.</h2>
              </IonCol>
            </IonRow>
          ) : (
            <MemoriesList items={goodMemories} />
          )}
        </IonGrid>
        {!isPlatform("ios") && (
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton routerLink="/new-memory">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GoodMemory;
