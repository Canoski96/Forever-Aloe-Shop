"use client";
import { IbreadcrumbItem } from "@/app/model";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface ICustomBreadcrumbProps {
  items?: IbreadcrumbItem[];
}

const CustomBreadcrumb = ({ items = [] }: ICustomBreadcrumbProps) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          w={{ base: "100%", lg: "90%" }}
          py="2rem"
          px="1rem"
          mx="auto"
          fontSize={{ base: "xs", lg: "md" }}
        >
          {items.map((item, index) =>
            index !== items.length - 1 ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <Text color="gray.500">{item.name}</Text>
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      )}
    </>
  );
};

export default CustomBreadcrumb;
