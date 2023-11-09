"use client";
import ProductCard from "@/components/ProductCard";
import { CSSProperties } from "react";
import SwiperNavButtons from "@/components/SwiperNavButtons";
import SectionHeading from "@/components/SectionHeading";
import { Box } from "@chakra-ui/react";
import { IProduct } from "@/app/model";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

interface FeaturedProductsProps {
  title: string;
  products: IProduct[];
}

const FeaturedProducts = ({ title, products }: FeaturedProductsProps) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1025, // this means below 1024px viewport width
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // this means below 768px viewport width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title={title} />
      <Slider {...sliderSettings}>
        {products?.map((product) => (
          <div key={product.id} style={slideStyles}>
            <ProductCard product={product} />
          </div>
        ))}

        {/* <SwiperNavButtons /> */}
      </Slider>
    </Box>
  );
};

export default FeaturedProducts;
