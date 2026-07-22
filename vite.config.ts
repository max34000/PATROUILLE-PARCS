import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/PATROUILLE-PARCS/",

  plugins: [
    react(),

    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "masked-icon.svg",
      ],

      manifest: {
        name: "Patrouille Parcs",
        short_name: "Patrouille",
        description:
          "Application mobile de gestion des tournées de surveillance des parcs",

        theme_color: "#15803d",
        background_color: "#15803d",

        display: "standalone",
        orientation: "portrait",

        start_url: "/PATROUILLE-PARCS/",
        scope: "/PATROUILLE-PARCS/",

        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/tile\.openstreetmap\.org\/.*/,
            handler: "CacheFirst",

            options: {
              cacheName: "openstreetmap-cache",

              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
});