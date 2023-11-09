import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import ReviewItems from "./ReviewItems";
import DeliveryInformation from "./DeliveryInformation";
import PaymentDetails from "./PaymentDetails";

const Checkout = () => {
  return (
    <Flex
      w={{ base: "100%", lg: "90%" }}
      mx="auto"
      flexDir={{ base: "column", lg: "row" }}
      gap="2rem"
    >
      <ReviewItems />
      {/* <Stack spacing={10} w={{ base: "100%", lg: "60%" }}>
        
        <DeliveryInformation />
      </Stack>
      <Box w={{ base: "100%", lg: "40%" }}><PaymentDetails /></Box> */}
    </Flex>
  );
};

export default Checkout;
