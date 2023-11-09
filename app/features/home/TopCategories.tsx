"use client";
import { ICategory } from "@/app/model";
import SectionHeading from "@/components/SectionHeading";
import { Box, Card, CardBody, Grid, GridItem, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ITopCategories {
  categories: ICategory[];
}

const TopCategories = ({ categories }: ITopCategories) => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title="Најпребарувани категории" />

      <Grid
        templateColumns={{
          base: "repeat(1, fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TopCategories;

interface ITopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: ITopCategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card
        direction="row"
        align="center"
        overflow="hidden"
        variant="outline"
        w="100%"
        h="100%"
        p="10px"
        _hover={{ cursor: "pointer", bgColor: "brand.primaryLight" }}
      >
        <Image
          src={category.image}
          alt={`Category ${category.name}`}
          width={200}
          height={100}
        />
        <CardBody>
          <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};
