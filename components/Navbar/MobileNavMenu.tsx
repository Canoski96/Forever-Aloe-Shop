"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AppLogo from "../AppLogo";
import { navItems } from "@/app/helpers";
import Link from "next/link";

const MobileNavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  const handleNavItemClick = () => {
    onClose();
  };

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} bgColor="transparent">
        <GiHamburgerMenu fontSize="1.5rem" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AppLogo />
          </DrawerHeader>
          <DrawerBody>
            {navItems.map((navItem, i) => (
              <Link key={i} href={navItem.href}>
                <Box
                  p="0.5rem"
                  _hover={{ bgColor: "brand.primaryLight", color: "white" }}
                  onClick={handleNavItemClick}
                >
                  {navItem.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavMenu;
