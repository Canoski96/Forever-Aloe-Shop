import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyle: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  mb: "1rem",
  zIndex: 10,
};

export const desktopNavStyle: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "1rem",
  borderBottomWidth: "1px",
  borderColor: "gray.200",
  display: { base: "none", lg: "flex" },
};

export const logoSectionStyles: StackProps = {
  direction: "row",
  gap: 6,
  flex: 1,
  alignItems: "center",
};

export const cartSectionStlyes: StackProps = {
  direction: "row",
  align: "center",
  spacing: 2,
};

export const mobileNavContainerStyle: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "1rem",
  borderBottom: "1px",
  borderColor: "gray.200",
  display: { base: "flex", lg: "none" },
};

export const mobileSearchWrapper: BoxProps = {
  px: "2rem",
  py: "0.5rem",
  mb: "1rem",
  display: { base: "block", lg: "none" },
};
