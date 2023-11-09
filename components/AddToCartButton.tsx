"use client";
import { IProduct } from "@/app/model";
import { AppContext } from "@/context/AppContext";
import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}

const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>
      {isAdded("cart", product.id) ? (
        <Button
          variant="outline"
          borderColor="brand.primaryDark"
          color="brand.primaryDark"
          rounded="full"
          size="sm"
          w="190px"
          _hover={{ borderColor: "brand.primaryDark" }}
          onClick={() => removeItem("cart", product.id)}
        >
          Отстрани од кошничка
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          rounded="full"
          size="sm"
          w="150px"
          _hover={{ bgColor: "brand.primary", color: "white" }}
          onClick={() => addItem("cart", product, count)}
        >
          Додај во кошничка
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
