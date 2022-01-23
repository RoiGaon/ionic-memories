import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import React from "react";

interface Props {
  icon: string;
  link: string;
}

const ToolbarAction: React.FC<Props> = ({ icon, link }) => {
  return (
    <IonButtons slot="end">
      <IonButton routerLink={link}>
        <IonIcon icon={icon} slot="icon-only" />
      </IonButton>
    </IonButtons>
  );
};

export default ToolbarAction;
