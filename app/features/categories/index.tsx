import { ICategory } from "@/app/model";
import { Card, CardBody, Grid, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IAllCategoriesProps {
  categories: ICategory[];
}

const AllCategories = ({ categories }: IAllCategoriesProps) => {
  return (
    <Grid
      w={{ base: "100%", lg: "90%" }}
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2, 1fr)" }}
      gap="20px"
      mx="auto"
      p="2rem"
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Grid>
  );
};

export default AllCategories;

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card
        direction="column"
        align="center"
        overflow="hidden"
        variant="outline"
        w="100%"
        h="100%"
        p="10px"
        _hover={{ bgColor: "brand.primaryLight", cursor: "pointer" }}
      >
        <Image
          src={category.image}
          alt={category.image}
          width={400}
          height={200}
          style={{ borderRadius: "5px" }}
        />
        <CardBody>
          <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};
