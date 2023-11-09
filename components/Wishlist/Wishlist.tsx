"use client";
import { AppContext } from "@/context/AppContext";
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useContext } from "react";
import { BsHeart } from "react-icons/bs";
import { WishlistItem } from "./WishlistItem";

export const Wishlist = () => {
  const isMobileView = useBreakpointValue({ base: true, lg: false });

  const {
    state: { wishlist },
    resetItems,
  } = useContext(AppContext);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          color="brand.primary"
          variant="ghost"
          _hover={{
            bgColor: "transparent",
          }}
          pos="relative"
        >
          <BsHeart /> {!isMobileView && <Text mx="1">Посакувани</Text>}
          {wishlist.length !== 0 && (
            <Flex
              pos="absolute"
              top="0px"
              right="5px"
              bgColor="brand.primaryDark"
              boxSize="15px"
              rounded="full"
              color="white"
              fontSize="0.6rem"
              align="center"
              justify="center"
            >
              {wishlist.length}
            </Flex>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader color="brand.primary" fontWeight="bold">
          Посакувани
        </PopoverHeader>
        <PopoverBody p="1rem">
          {wishlist.length === 0 ? (
            <>Вашата листа со посакувања е празна</>
          ) : (
            wishlist.map((item) => <WishlistItem key={item.id} item={item} />)
          )}
        </PopoverBody>
        <PopoverFooter>
          {wishlist.length !== 0 && (
            <Button
              variant="outline"
              mr={3}
              onClick={() => resetItems("wishlist")}
              borderColor="brand.primary"
              bgColor="brand.primary"
              color="white"
              _hover={{ bgColor: "brand.primaryDark", color: "white" }}
            >
              Испразни ја листата
            </Button>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
