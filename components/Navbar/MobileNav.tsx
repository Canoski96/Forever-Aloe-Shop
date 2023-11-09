import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AppLogoMobile from "../AppLogoMobile";
import { mobileNavContainerStyle, mobileSearchWrapper } from "./style";
import Search from "../Search/Search";
import MobileNavMenu from "./MobileNavMenu";
import { Wishlist } from "../Wishlist/Wishlist";
import Cart from "../Cart/Cart";

const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyle}>
        <Box>
          <MobileNavMenu />
        </Box>
        <AppLogoMobile />
        <Stack direction="row" spacing={1}>
          <Wishlist />
          <Cart />
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </>
  );
};

export default MobileNav;
