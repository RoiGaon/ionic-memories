import React from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { add } from "ionicons/icons";

import { MemoriesList } from "components";
import { Memory } from "types/memoriesType";
import FixedBottomFab from "./FixedBottomFab";
import ToolbarAction from "./ToolbarAction";

interface Props {
  title: string;
  fallbackText: string;
  memories: Memory[];
}

const MemoriesContent: React.FC<Props> = ({
  title,
  fallbackText,
  memories,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          {isPlatform("ios") && <ToolbarAction icon={add} link="new-memory" />}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {memories.length === 0 ? (
            <IonRow>
              <IonCol>
                <h2>{fallbackText}</h2>
              </IonCol>
            </IonRow>
          ) : (
            <MemoriesList items={memories} />
          )}
        </IonGrid>
        {!isPlatform("ios") && <FixedBottomFab icon={add} link="/new-memory" />}
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;
