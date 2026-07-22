import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "leaflet/dist/leaflet.css";

import App from "./App.tsx";

import { registerSW } from "virtual:pwa-register";


// Gestion mise à jour PWA
const updateSW = registerSW({

  onNeedRefresh() {

    if (
      confirm(
        "Une nouvelle version de PATROUILLE-PARCS est disponible. Mettre à jour ?"
      )
    ) {

      updateSW(true);

    }

  },


  onOfflineReady() {

    console.log(
      "PATROUILLE-PARCS disponible hors connexion"
    );

  },

});



createRoot(
  document.getElementById("root")!
).render(

  <StrictMode>

    <App />

  </StrictMode>

);