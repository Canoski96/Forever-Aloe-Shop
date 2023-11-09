import { CardProps, ImageProps } from "@chakra-ui/react";

export const heroCardStyles: CardProps = {
  direction: { base: "column", lg: "row" },
  align: "center",
  justify: "center",
  overflow: "hidden",
  variant: "outline",
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  shadow: "sm",
  p: "2rem",
  mb: "2rem",
  mt: "2rem",
};

export const heroImageStyles: ImageProps = {
  objectFit: "cover",
  maxW: "100%",
  rounded: "mg ",
};
