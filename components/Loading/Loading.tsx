"use client";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <Flex
      minH="calc(100vh - 150px)"
      justify="center"
      align="center"
      flexDir="column"
    >
      <Image
        src="/loading-spinner.gif"
        alt="Loading Spinner"
        width={150}
        height={150}
      />
    </Flex>
  );
};

export default Loading;
