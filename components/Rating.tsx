import { IRating } from "@/app/model";
import { colors } from "@/app/theme";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReactStars from "react-stars";

interface IRatingProps {
  rating: IRating;
}

const Rating = ({ rating }: IRatingProps) => {
  return (
    <Flex>
      <ReactStars
        count={5}
        value={rating?.rate}
        half={true}
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text>({rating?.count})</Text>
    </Flex>
  );
};

export default Rating;
