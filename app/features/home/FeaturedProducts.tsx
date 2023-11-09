"use client";
import ProductCard from "@/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperOptions from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { CSSProperties } from "react";
import SwiperNavButtons from "@/components/SwiperNavButtons";
import SectionHeading from "@/components/SectionHeading";
import { Box } from "@chakra-ui/react";
import { IProduct } from "@/app/model";

const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

interface FeaturedProductsProps {
  title: string;
  products: IProduct[];
}

const FeaturedProducts = ({ title, products }: FeaturedProductsProps) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title={title} />
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        {products?.map((product) => (
          <SwiperSlide key={product.id} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </Box>
  );
};

export default FeaturedProducts;
