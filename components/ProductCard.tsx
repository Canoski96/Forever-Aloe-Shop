import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";
import AddToCartButton from "./AddToCartButton";
import { IProduct } from "@/app/model";
import { getSubstring } from "@/app/helpers";
import AddToWishlistButton from "./AddToWishlistButton";
import Link from "next/link";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <AddToWishlistButton product={product} />
      <CardBody>
        <Link href={`/products/${product.slug}`}>
          <Box
            boxSize="200px"
            bg={`center / contain no-repeat url(${product.minImage})`}
            mx="auto"
            borderRadius="lg"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{getSubstring(product.name, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="lg">{product.price} MKD</Text>
            </Flex>
          </Flex>
          <Text>{getSubstring(product.description, 29)}</Text>
          {/* <Rating rating={product.rating} /> */}
          <AddToCartButton product={product} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
