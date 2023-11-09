"use client";
import { calculateItemsTotal, formatPrice } from "@/app/helpers";
import { AppContext } from "@/context/AppContext";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Input,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";

const PaymentDetails = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const {
    state: { checkout },
  } = useContext(AppContext);

  useEffect(() => {
    const subTotal: number = calculateItemsTotal(checkout);
    setSubTotal(subTotal);
  }, [checkout]);

  return (
    <Card
      borderWidth="1px"
      borderColor="gray.200"
      shadow="none"
      padding="2rem"
      mt="2rem"
    >
      <CardHeader>
        <Heading size="md">Детали за плаќање</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing="2rem">
          <Flex>
            <Input
              type="text"
              placeholder="Внесете го кодот на купонот"
              rounded="full"
              focusBorderColor="brand.primaryLight"
            />
            <Button
              bgColor="brand.primary"
              color="white"
              rounded="full"
              ml="-40px"
              px="2rem"
              _hover={{ bgColor: "brand.primaryDark" }}
              _active={{ bgColor: "brand.primaryDark" }}
              zIndex={1}
            >
              Примени купон
            </Button>
          </Flex>

          <Divider mt="1rem" />

          <Box>
            <Heading size="xs" my="1rem">
              Опција за плаќање
            </Heading>
            <Stack>
              <Radio value="cashOnDelivery" isChecked>
                Плаќање при испорака
              </Radio>
            </Stack>
          </Box>
        </Stack>

        <Divider mt="1rem" />

        <Box>
          <Flex justify="space-between" align="center" my="1rem">
            <Text fontWeight="bold">Подзбир</Text>
            <Text fontWeight="bold">{formatPrice(subTotal)} MKD</Text>
          </Flex>

          <Flex justify="space-between" align="center" my="1rem">
            <Text fontWeight="bold">Попуст од купон</Text>
            <Text fontWeight="bold">{formatPrice(0)} MKD</Text>
          </Flex>

          <Flex justify="space-between" align="center" my="1rem">
            <Text fontWeight="bold">Цена на испораката</Text>
            <Text fontWeight="bold">Бесплатно</Text>
          </Flex>

          <Divider />

          <Flex justify="space-between" align="center" my="1rem">
            <Text fontWeight="bold">Вкупно</Text>
            <Text fontWeight="bold">{formatPrice(subTotal)} MKD</Text>
          </Flex>
        </Box>

        <Button
          bgColor="brand.primary"
          color="white"
          w="100%"
          rounded="full"
          _hover={{
            bgColor: "brand.primaryDark",
          }}
          _active={{
            bgColor: "brand.primaryDark",
          }}
        >
          Нарачај {formatPrice(subTotal)} MKD
        </Button>
      </CardBody>
    </Card>
  );
};

export default PaymentDetails;
