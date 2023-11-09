import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { cartSectionStlyes, desktopNavStyle, logoSectionStyles } from "./style";
import AppLogo from "../AppLogo";
import { navItems } from "@/app/helpers";
import Link from "next/link";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";

const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyle}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>

        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}

        <Box>
          <Search />
        </Box>
      </Stack>

      <Stack {...cartSectionStlyes}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
