import React from "react";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import "./MemoryItem.css";

interface Props {
  image: string;
  title: string;
}

const MemoryItem: React.FC<Props> = ({ image, title }) => {
  return (
    <IonCard className="memory-item">
      <img src={image} alt={title} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default MemoryItem;
