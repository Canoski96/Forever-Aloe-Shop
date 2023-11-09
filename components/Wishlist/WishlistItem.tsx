import { getSubstring } from "@/app/helpers";
import { IItem } from "@/app/model";
import { AppContext } from "@/context/AppContext";
import { Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { BsCart, BsCartX, BsTrash } from "react-icons/bs";

interface WishlistItemProps {
  item: IItem;
}

export const WishlistItem = ({ item }: WishlistItemProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <Grid
      alignItems="center"
      templateColumns="repeat(8, 1fr)"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      my="2"
      py="1"
    >
      <GridItem>
        <Link href={item.slug}>
          <Image
            alt={item.name}
            src={item.minImage}
            boxSize="40px"
            rounded="full"
            borderWidth="1px"
            borderColor="gray.300"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={4}>
        <Link href={item.slug}>
          <Text fontSize="sm" title={item.name}>
            {getSubstring(item.name, 17)}
          </Text>
        </Link>
      </GridItem>

      <GridItem>
        <Text fontWeight="bold" fontSize="xs">
          {item.price} MKD
        </Text>
      </GridItem>

      <GridItem textAlign="right">
        {isAdded("cart", item.id) ? (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="gray.300"
            color="gray.500"
            title="Remove from Cart"
            onClick={() => removeItem("cart", item.id)}
          >
            <BsCartX />
          </Button>
        ) : (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="brand.primary"
            color="brand.primary"
            title="Add to Cart"
            onClick={() => addItem("cart", item)}
          >
            <BsCart />
          </Button>
        )}
      </GridItem>

      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          size="xs"
          onClick={() => removeItem("wishlist", item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  );
};
