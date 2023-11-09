import {
  BoxProps,
  ButtonProps,
  FlexProps,
  HeadingProps,
  TextProps,
} from "@chakra-ui/react";

export const bannerStyles: FlexProps = {
  justify: "center",
  align: "center",
  gap: "2",
  flexDirection: { base: "column", lg: "row" },
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  p: "1rem",
  textAlign: { base: "center", lg: "left" },
};

export const bannerHeadingStyles: HeadingProps = {
  size: { base: "xl", lg: "3xl" },
  lineHeight: "4rem",
  color: "brand.primary",
};

export const bannerTextStyles: TextProps = {
  fontSize: { base: "md", lg: "lg" },
  py: "1rem",
  maxW: "600px",
  m: { base: "0 auto", lg: "0" },
};

export const bannerBtnStyles: ButtonProps = {
  rounded: "full",
  minW: "10rem",
  bgColor: "brand.primary",
  color: "white",
  _hover: { bgColor: "brand.primaryDark" },
};

// export const bannerImgBoxStyle: BoxProps = {
//   my: { base: "1rem", lg: "0" },
//   w: { base: "300px", lg: "600px" },
//   h: { base: "300px", lg: "600px" },
//   bg: "center / cover no-repeat url(bannerImage.png)",
//   position: "relative", // Set position to relative
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

export const bannerImgBoxStyle: BoxProps = {
  my: "1rem",
  w: { base: "300px", lg: "600px" },
  h: { base: "300px", lg: "600px" },
  bg: "center / cover no-repeat url(bannerImage.png) ",
  m: { base: "0 auto", lg: "0 1rem" },
};
