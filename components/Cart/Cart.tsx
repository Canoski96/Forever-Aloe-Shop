"use client";
import { AppContext } from "@/context/AppContext";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import CartItem from "./CartItem";
import Link from "next/link";
import { calculateItemsTotal } from "@/app/helpers";

const Cart = () => {
  const isMobileView = useBreakpointValue({ base: true, lg: false });

  const {
    state: { cart },
    resetItems,
    addItem,
  } = useContext(AppContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  const handleCheckout = () => {
    resetItems("checkout");
    cart.forEach((cartItem) => {
      addItem("checkout", cartItem, cartItem.count);
    });

    resetItems("cart");

    onClose();
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="brand.primary"
        _hover={{ bgColor: "transparent" }}
        pos="relative"
      >
        <BsCart4 />
        {!isMobileView && <Text mx="1">Количка</Text>}
        {cart.length !== 0 && (
          <Flex
            pos="absolute"
            top="0"
            right="5px"
            bgColor="brand.primaryDark"
            boxSize="15px"
            rounded="full"
            color="white"
            fontSize="0.6rem"
            align="center"
            justify="center"
          >
            {cart.length}
          </Flex>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "xs", lg: "lg" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {cart.length} Производи во вашата кошничка
          </DrawerHeader>

          <DrawerBody>
            {cart.length === 0 ? (
              <>Вашата кошничка е празна</>
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </DrawerBody>

          {cart.length !== 0 && (
            <DrawerFooter justifyContent="space-between">
              <Box
                display="flex"
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent="center"
                alignItems="center"
                gap={{ base: "2", lg: "0" }}
              >
                {/* <Button
                  variant="outline"
                  mr={{ base: 0, lg: 3 }}
                  onClick={() => resetItems("cart")}
                >
                  Испразни кошничка
                </Button> */}
                <Link href="/checkout">
                  <Button
                    bgColor="brand.primary"
                    color="white"
                    _hover={{
                      bgColor: "brand.primaryLight",
                    }}
                    _active={{
                      bgColor: "brand.primaryLight",
                    }}
                    onClick={handleCheckout}
                  >
                    Плаќање
                  </Button>
                </Link>
              </Box>
              <Box fontWeight="bold">
                Вкупно: {calculateItemsTotal(cart)} MKD
              </Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
