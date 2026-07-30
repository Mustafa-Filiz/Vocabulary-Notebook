import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wortschatzi",
    short_name: "Wortschatzi",
    description: "A vocabulary learning app",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/app-logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
