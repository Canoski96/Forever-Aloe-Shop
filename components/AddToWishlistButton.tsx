"use client";
import { IProduct } from "@/app/model";
import { AppContext } from "@/context/AppContext";
import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface IAddToWishlistButtonProps {
  product: IProduct;
}

const AddToWishlistButton = ({ product }: IAddToWishlistButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>
      {isAdded("wishlist", product.id) ? (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          rounded="full"
          _hover={{ bgColor: "transparent" }}
          title="Remove from Wishlist"
          onClick={() => removeItem("wishlist", product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          rounded="full"
          _hover={{ bgColor: "transparent" }}
          title="Add to Wishlist"
          onClick={() => addItem("wishlist", product)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};

export default AddToWishlistButton;
