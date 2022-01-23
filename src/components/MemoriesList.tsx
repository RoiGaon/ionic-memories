import { IonCol, IonRow } from "@ionic/react";
import React from "react";
import { Memory } from "types/memoriesType";
import MemoryItem from "./MemoryItem";

interface Props {
  items: Memory[];
}

const MemoriesList: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((memory) => (
        <IonRow key={memory.id}>
          <IonCol>
            <MemoryItem image={memory.base64Url} title={memory.title} />
          </IonCol>
        </IonRow>
      ))}
    </>
  );
};

export default MemoriesList;
