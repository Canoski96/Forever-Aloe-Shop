import { BoxProps, InputProps } from "@chakra-ui/react";

export const searchInputStyles: InputProps = {
  type: "text",
  placeholder: "Пребарај...",
  focusBorderColor: "brand.primaryLight",
  borderWidth: "1px",
  borderColor: "gray.400",
};

export const wrapperContainerStyles: BoxProps = {
  pos: "relative",
  w: { base: "100%", lg: "32rem" },
};

export const dropdownStyles: BoxProps = {
  pos: "absolute",
  bg: "white",
  shadow: "md",
  padding: "0.5rem",
  w: "100%",
  maxH: "500px",
  overflow: "auto",
  boxSizing: "border-box",
};
