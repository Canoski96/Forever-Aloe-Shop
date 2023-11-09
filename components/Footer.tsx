import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AppLogo from "./AppLogo";

const Footer = () => {
  return (
    <Box bg="green.10" borderTopWidth="1px" p="5px">
      <Container maxW={"6x1"}>
        <Stack
          justify="space-between"
          align="center"
          direction="row"
          spacing={6}
        >
          <AppLogo />
          <Text fontSize={{ base: "x-small", lg: "sm" }}>
            © 2023 Forever Aloe. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
