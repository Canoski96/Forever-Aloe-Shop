import { Box } from "@chakra-ui/react";
import React from "react";
import { navbarStyle } from "./style";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <Box className="navbar-wrapper" h={{ base: "120px", lg: "70px" }}>
      <Box {...navbarStyle}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  );
};

export default Navbar;
