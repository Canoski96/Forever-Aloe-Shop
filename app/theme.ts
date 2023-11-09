import { extendTheme } from "@chakra-ui/react";
import { buildLegacyTheme } from "sanity";

export const colors = {
  brand: {
    primary: "#79AC78",
    primaryLight: "#B0D9B1",
    primaryDark: "#618264",
  },
};

export const theme = extendTheme({ colors });

const props = {
  "--fa-white": "#fff",
  "--fa-black": "#1a1a1a",
  "--brand-primary": colors.brand.primary,
  "--brand-primary-light": colors.brand.primaryLight,
  "--brand-primary-dark": colors.brand.primaryDark,
  "--fa-gray": "#666666",
};

export const faTheme = buildLegacyTheme({
  "--black": props["--fa-black"],
  "--gray": props["--fa-gray"],

  "--focus-color": props["--brand-primary-dark"],

  "--brand-primary": props["--brand-primary"],

  "--component-bg": props["--fa-white"],
  "--component-text-color": props["--fa-black"],

  "--default-button-color": props["--fa-gray"],
  "--default-button-primary-color": props["--brand-primary"],

  "--state-info-color": props["--brand-primary-light"],
});
