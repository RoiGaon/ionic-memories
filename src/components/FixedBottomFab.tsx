import React from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";

interface Props {
  icon: string;
  link: string;
}

const FixedBottomFab: React.FC<Props> = ({ icon, link }) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton routerLink={link}>
        <IonIcon icon={icon} />
      </IonFabButton>
    </IonFab>
  );
};

export default FixedBottomFab;
