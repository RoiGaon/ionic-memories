import React from "react";
import ReactDOM from "react-dom";
import { MemoriesContextProvider } from "contextStore/memories-context";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

import App from "./App";

ReactDOM.render(
  <MemoriesContextProvider>
    <App />
  </MemoriesContextProvider>,
  document.getElementById("root")
);

defineCustomElements(window);
