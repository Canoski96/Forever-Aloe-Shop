import AppContext from "@/context/AppContext";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useContext } from "react";

const DeliveryInformation = () => {
  return (
    <Card borderWidth="1px" borderColor="gray.200" shadow="none" mb="2rem">
      <CardHeader>
        <Heading size="md">Информации за испорака</Heading>
      </CardHeader>

      <CardBody>
        <Stack>
          <Box>
            <FormLabel>Име</FormLabel>
            <Input
              type="text"
              placeholder="Име"
              focusBorderColor="brand.primaryLight"
              required
            />
          </Box>

          <Box>
            <FormLabel>Презиме</FormLabel>
            <Input
              type="text"
              placeholder="Презиме"
              focusBorderColor="brand.primaryLight"
              required
            />
          </Box>

          <Box>
            <FormLabel>Адреса / Улица / Град</FormLabel>
            <Input
              type="text"
              placeholder="Адреса / Улица / Град"
              focusBorderColor="brand.primaryLight"
              required
            />
          </Box>

          <Box>
            <FormLabel>Телефон</FormLabel>
            <Input
              type="number"
              placeholder="Телефон"
              focusBorderColor="brand.primaryLight"
              required
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DeliveryInformation;
