import Hero from "@/components/Hero/Hero";
import React from "react";
import AllCategories from "@/app/features/categories";
import { groq } from "next-sanity";
import { client } from "@/utils/sanity.client";
import { ICategory } from "@/app/model";

const getAllCategoriesQueries = groq`
  *[_type == "category"] {
    "id": _id,
    name,
    "slug": slug.current,
    "image": image.asset->url
  }
`;

const getCategoriesAsync = () => {
  return client.fetch(getAllCategoriesQueries);
};

export const revalidate = 60;

const CategoriesPage = async () => {
  const categories: ICategory[] = await getCategoriesAsync();
  return (
    <>
      <Hero
        heading="Категории на производи"
        description="Од нега на кожата до додатоци за исхрана: Подигнете го вашиот начин на живот со нашите категории на производи"
        imageUrl="/allProductsBanner.png"
        btnLabel="Прегледајте ги сите производи"
        btnLink="/products"
      />
      <AllCategories categories={categories} />
    </>
  );
};

export default CategoriesPage;
