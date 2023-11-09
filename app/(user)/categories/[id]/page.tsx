import AllProducts from "@/app/features/products";
import { defaultBreadcrumbItems } from "@/app/helpers";
import { ICategory, IProduct } from "@/app/model";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Hero from "@/components/Hero/Hero";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const query: string = groq`
  *[_type == "product" && references($id)] {
    ...,
    "id": _id,
    "slug": slug.current,
    "minImage": minImage.asset->url,
    category->{name, "image": image.asset->url}
  }
`;

export const revalidate = 60;

type Props = {
  params: {
    id: string;
  };
};

const CategoryPage = async ({ params: { id } }: Props) => {
  const products: IProduct[] = await client.fetch(query, { id });
  return (
    <>
      <Hero
        heading={products[0].category!.name}
        description={`Најдобри и Поволни ${products[0].category!.name} `}
        imageUrl={products[0].category!.image}
        btnLabel="Прегледајте ги сите категории"
        btnLink="/categories"
      />
      <CustomBreadcrumb
        items={[
          ...defaultBreadcrumbItems,
          { name: products[0]!.category!.name, link: "#" },
        ]}
      />
      <AllProducts products={products} />
    </>
  );
};

export default CategoryPage;

export async function generateStaticProps() {
  const query = groq`*[_type == "category"] {
    "id": _id
  }`;

  const categories: ICategory[] = await client.fetch(query);

  return categories.map((category) => ({
    id: category.id,
  }));
}
