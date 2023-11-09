"use client";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  dropdownStyles,
  searchInputStyles,
  wrapperContainerStyles,
} from "./style";
import { useCallback, useEffect, useRef, useState } from "react";
import { groq } from "next-sanity";
import { IProduct } from "@/app/model";
import { client } from "@/utils/sanity.client";
import Link from "next/link";

const query: string = groq`
  *[_type == "product" && (name match $searchText || description match $searchText)] {
    ...,
    "id": _id,
    "slug": slug.current,
    "minImage": minImage.asset->url,
    category-> {
      name,
      "id": _id,
      "image": image.asset->url
    },
  }
`;

const Search = () => {
  const ref = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useOutsideClick({
    ref,
    handler: () => {
      setIsModalOpen(false);
      setProducts([]);
    },
  });

  // const fetchProducts = async () => {
  //   setIsLoading(true);
  //   if (searchText.trim() === "") {
  //     setProducts([]);
  //     setIsLoading(false);
  //   } else {
  //     const products: IProduct[] = await client.fetch(query, {
  //       searchText: `*${searchText}*`,
  //     });
  //     setProducts(products);
  //     setIsLoading(false);
  //   }
  // };
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    if (searchText.trim() === "") {
      setProducts([]);
      setIsLoading(false);
    } else {
      const products: IProduct[] = await client.fetch(query, {
        searchText: `*${searchText}*`,
      });
      setProducts(products);
      setIsLoading(false);
    }
  }, [searchText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchProducts();
      }
    }, 10);
    return () => clearTimeout(timeout);
  }, [searchText, fetchProducts]);

  return (
    <Box {...wrapperContainerStyles} ref={ref}>
      <InputGroup size="sm" width={{ base: "100%", lg: "32rem" }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onClick={() => setIsModalOpen(true)}
          {...searchInputStyles}
        />
      </InputGroup>
      {isModalOpen && (
        <Box {...dropdownStyles}>
          {products.length === 0 || searchText.trim() === "" ? (
            <>Не се пронајдени производи</>
          ) : (
            <SearchedProductList
              products={products}
              setIsModalOpen={setIsModalOpen}
              setSearchText={setSearchText}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default Search;

interface SearchedProductListProps {
  products: IProduct[];
}

const SearchedProductList = ({
  products,
  setIsModalOpen,
  setSearchText,
}: SearchedProductListProps & {
  setIsModalOpen: (isOpen: boolean) => void;
  setSearchText: (text: string) => void;
}) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <Box
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            p="2"
            _hover={{ bgColor: "gray.100" }}
            onClick={() => {
              setIsModalOpen(false);
              setSearchText("");
            }}
          >
            <Flex align="center">
              <Image
                alt={product.name}
                src={product.minImage}
                boxSize="24px"
                mr="10px"
              />
              <Text>{product.name}</Text>
            </Flex>
            <Flex justify="flex-end">
              <Tag size="sm">{product.category?.name}</Tag>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  );
};
