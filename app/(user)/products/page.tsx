import React, { useState } from "react";
import AllProducts from "@/app/features/products";
import Hero from "@/components/Hero/Hero";
import { groq } from "next-sanity";
import { client } from "@/utils/sanity.client";
import { IProduct } from "@/app/model";
import { usePagination } from "@mantine/hooks";

const getAllProductsQueries: string = groq`
*[_type == "product"] {
  "id": _id,
  name,
  description,
  price,
  rating,
  "slug": slug.current,
  "minImage": minImage.asset->url
}
`;

const getProductsAsync = () => {
  return client.fetch(getAllProductsQueries);
};

export const revalidate = 60;

const ProductsPage = async () => {
  const products: IProduct[] = await getProductsAsync();

  return (
    <>
      <Hero
        heading="Откријте го волшебството на алое вера"
        description="Загрлијте ја подобрата, среќнија верзија на вас со нашата премиум линија на производи со алое вера."
        imageUrl="/allProductsBanner.png"
        btnLabel="Прегледајте ги сите категории"
        btnLink="/categories"
      />
      <AllProducts products={products} />
    </>
  );
};

export default ProductsPage;
