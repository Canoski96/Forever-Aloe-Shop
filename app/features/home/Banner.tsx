"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  bannerBtnStyles,
  bannerHeadingStyles,
  bannerImgBoxStyle,
  bannerStyles,
  bannerTextStyles,
} from "./style";
import Link from "next/link";

const Banner = () => {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading {...bannerHeadingStyles}>
          Forever Aloe <br />
          <span style={{ color: "#1A202C" }}>Вашата онлајн продавница за </span>
          Здрав Живот!
        </Heading>
        <Text {...bannerTextStyles}>
          Откријте ги бескрајните придобивки од Алое Вера во Forever Aloe,
          вашата омилена онлајн дестинација за природно здравје.
        </Text>
        <Link href="/products">
          <Button {...bannerBtnStyles}>Преглед на производи</Button>
        </Link>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box {...bannerImgBoxStyle} aria-label="Banner Image" />
      </Box>
    </Flex>
  );
};

export default Banner;
