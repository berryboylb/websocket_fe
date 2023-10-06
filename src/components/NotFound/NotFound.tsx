import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

function NotFound() {
  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Heading fontSize="6xl" color="red.500">
          404
        </Heading>
        <Text fontSize="xl" fontWeight="bold" mt="4">
          Page Not Found
        </Text>
        <Text fontSize="lg" mt="4">
          The page you are looking for does not exist.
        </Text>
      </Box>
    </Center>
  );
}

export default NotFound;
