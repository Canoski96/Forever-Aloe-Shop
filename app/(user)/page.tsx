import Banner from "@/app/features/home/Banner";
import FeaturedProducts from "@/app/features/home/FeaturedProducts";
import TopCategories from "@/app/features/home/TopCategories";
import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import { IFeaturedItems } from "../model";

const getAllFeaturedItemsQueries = groq`
*[_type == 'featuredProductAndCategories'] {
  "topCategories": topCategories[]->{
    "id": _id,
    name,
    "image": image.asset->url
  },
  "trendingProducts": trendingProducts[]->{
    "id": _id,
    name,
    description,
    price,
    "slug": slug.current,
    rating,
    "minImage": minImage.asset->url
  },
  "bestDeals": bestDeals[]->{
    "id": _id,
    name,
    description,
    price,
    "slug": slug.current,
    rating,
    "minImage": minImage.asset->url
  },
  "mostSellingProducts": mostSellingProducts[]->{
    "id": _id,
    name,
    description,
    price,
    "slug": slug.current,
    rating,
    "minImage": minImage.asset->url
  },
}
`;

const getFeaturedItemsAsync = () => {
  return client.fetch(getAllFeaturedItemsQueries);
};

export const revalidate = 60;

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();
  return (
    <div>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      {/* <FeaturedProducts
        title="Best Deals For You"
        products={featuredItems[0].bestDeals}
      /> */}
      <FeaturedProducts
        title="Најпродавани производи"
        products={featuredItems[0].mostSellingProducts}
      />
      <FeaturedProducts
        title="Најактуелни производи"
        products={featuredItems[0].trendingProducts}
      />
    </div>
  );
}
