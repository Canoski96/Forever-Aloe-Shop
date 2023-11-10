"use client";
import { calculateItemsTotal, formatPrice, getSubstring } from "@/app/helpers";
import { AppContext } from "@/context/AppContext";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ReviewItems = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data: any) => {
  //   setIsSubmitting(true);
  //   console.log(data);
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     toast.success("Вашата нарачка беше успешно испратена");
  //   }, 2000);
  // };

  const onSubmit = (data: any) => {
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "checkout", ...data }),
    })
      .then(() => {
        setIsSubmitting(false);
        toast.success("Вашата нарачка беше успешно испратена");
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.log("Error", error);
        toast.error("Има проблем при испраќањето на нарачката.");
      });
  };

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
    <>
      <ToastContainer position="top-center" />
      <Stack spacing={10} w={{ base: "100%", lg: "60%" }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none" mt="2rem">
          <CardHeader>
            <Heading size="md">Преглед на производите</Heading>
          </CardHeader>

          <CardBody>
            <Stack>
              {checkout.map((item, index) => (
                <Flex key={index} align="center" justify="space-between">
                  <Flex align="center">
                    <Image
                      src={item.minImage}
                      alt={item.name}
                      boxSize="100px"
                      bgSize="contain"
                    />
                    <Box mx="1rem">
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "sm", lg: "lg" }}
                        maxW="500px"
                      >
                        {item.name}
                      </Text>
                      <Text color="gray.500">
                        {getSubstring(item.description, 50)}
                      </Text>
                    </Box>
                  </Flex>
                  <Box textAlign="right">
                    <Text fontWeight="bold" fontSize={{ base: "md", lg: "lg" }}>
                      {formatPrice(item.price)} MKD
                    </Text>
                    <Text fontSize={{ base: "sm", lg: "md" }}>
                      Количина: {item.count}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </CardBody>
        </Card>

        <Card borderWidth="1px" borderColor="gray.200" shadow="none" mb="2rem">
          <CardHeader>
            <Heading size="md">Информации за испорака</Heading>
          </CardHeader>
          <form
            id="checkout-form"
            onSubmit={handleSubmit(onSubmit)}
            name="checkout"
            data-netlify="true"
            method="POST"
          >
            <input type="hidden" name="form-name" value="checkout" />
            <CardBody>
              <Stack>
                <Box>
                  <FormLabel>Име</FormLabel>
                  <Input
                    {...register("firstName")}
                    type="text"
                    placeholder="Име"
                    focusBorderColor="brand.primaryLight"
                    required
                  />
                </Box>

                <Box>
                  <FormLabel>Презиме</FormLabel>
                  <Input
                    {...register("lastName")}
                    type="text"
                    placeholder="Презиме"
                    focusBorderColor="brand.primaryLight"
                    required
                  />
                </Box>

                <Box>
                  <FormLabel>Адреса</FormLabel>
                  <Input
                    {...register("address")}
                    type="text"
                    placeholder="Адреса"
                    focusBorderColor="brand.primaryLight"
                    required
                  />
                </Box>

                <Box>
                  <FormLabel>Град</FormLabel>
                  <Input
                    {...register("city")}
                    type="text"
                    placeholder="Град"
                    focusBorderColor="brand.primaryLight"
                    required
                  />
                </Box>

                <Box>
                  <FormLabel>Телефон</FormLabel>
                  <Input
                    {...register("phone")}
                    type="number"
                    placeholder="Телефон"
                    focusBorderColor="brand.primaryLight"
                    required
                  />
                </Box>
                {checkout.map((item, index) => (
                  <div key={index}>
                    <input
                      {...register(`items.${index}.name`)}
                      defaultValue={item.name}
                      hidden
                    />
                    <input
                      {...register(`items.${index}.quantity`)}
                      defaultValue={item.count}
                      hidden
                    />
                  </div>
                ))}
              </Stack>
            </CardBody>
          </form>
        </Card>
      </Stack>

      <Box w={{ base: "100%", lg: "40%" }}>
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
              type="submit"
              form="checkout-form"
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
              isLoading={isSubmitting}
            >
              Нарачај
            </Button>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default ReviewItems;
