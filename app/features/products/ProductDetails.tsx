"use client";
import { defaultBreadcrumbItems, getSubstring } from "@/app/helpers";
import { IProduct, IbreadcrumbItem } from "@/app/model";
import AddToCartButton from "@/components/AddToCartButton";
import AddToWishlistButton from "@/components/AddToWishlistButton";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Quantity from "@/components/Quantity";
import Rating from "@/components/Rating";
import { AppContext } from "@/context/AppContext";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";

interface IProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductDetailsProps) => {
  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { isAdded, addItem, resetItems } = useContext(AppContext);

  const truncatedDescription = showMore
    ? product.description
    : `${product.description.slice(0, 500)}...`;
  return (
    <>
      <CustomBreadcrumb
        items={[
          ...defaultBreadcrumbItems,
          {
            name: product.category!.name,
            link: `/categories/${product.category?.id}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
        gap="20"
      >
        <GridItem p="1rem" pos="relative">
          <AddToWishlistButton product={product} />
          <Image src={product.minImage} alt={product.name} mx="auto" />
        </GridItem>
        <GridItem p="1rem">
          <Heading>{product.name}</Heading>
          <Text
            my="1rem"
            dangerouslySetInnerHTML={{
              __html: truncatedDescription.replace(/\n/g, "<br />"),
            }}
          />
          {!showMore && product.description.length > 200 && (
            <Button
              variant="link"
              color="brand.primary"
              onClick={() => setShowMore(true)}
              paddingBottom="1.5rem"
            >
              Прикажи повеќе
            </Button>
          )}

          {/* <Rating rating={product.rating} /> */}
          <Text fontWeight="bold" fontSize="2rem">
            {product.price} MKD
          </Text>
          <Divider my="1rem" />
          <Quantity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            disabled={isAdded("cart", product.id)}
            defaultValue={1}
          />
          <Divider my="1rem" />
          <Box>
            <Link href="/checkout">
              <Button
                variant="outline"
                bgColor="brand.primary"
                color="white"
                borderRadius="50px"
                size="sm"
                w="160px"
                mr="1rem"
                my="0.5rem"
                _hover={{ bgColor: "brand.primaryDark" }}
                onClick={() => {
                  resetItems("checkout");
                  addItem("checkout", product, quantity);
                }}
              >
                Купи веднаш
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
          </Box>
          <Stack py="2rem">
            <Box
              borderWidth={1}
              borderColor="gray.100"
              p="1rem"
              display="flex"
              alignContent="center"
              alignItems="center"
              gap={3}
            >
              <Box fontSize="2rem">
                <TbTruckDelivery />
              </Box>
              <Box>
                <Text fontWeight="bold">Бесплатна испорака</Text>
                <Text color="gray.500">Низ цела Северна Македонија</Text>
              </Box>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default ProductDetails;
