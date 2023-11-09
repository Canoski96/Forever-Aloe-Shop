import { visionTool } from "@sanity/vision";
import { Config } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { faTheme } from "./app/theme";
import StudioNavbar from "./components/StudioNavbar";

export const config: Config = {
  name: "default",
  title: "Forever Aloe",
  projectId: "iu1cm4kr",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: faTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};
