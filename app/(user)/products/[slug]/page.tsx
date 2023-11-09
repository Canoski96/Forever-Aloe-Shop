import ProductDetails from "@/app/features/products/ProductDetails";
import { IProduct } from "@/app/model";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const query: string = groq`
  *[_type == "product" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    "minImage": minImage.asset->url,
    category->{
      name,
      "id": _id,
      "image": image.asset->url
    },
  }
`;

type Props = {
  params: {
    slug: string;
  };
};

const ProductDetailsPage = async ({ params: { slug } }: Props) => {
  const product: IProduct = await client.fetch(query, { slug });
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
