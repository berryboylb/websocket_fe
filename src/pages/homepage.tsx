import { Suspense } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
export default function Home() {
  return (
    <Suspense>
      <Container maxW="container.sm" centerContent>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Text fontSize={"4xl"} fontFamily={"Work sans"} color="black">
            Chat App
          </Text>
        </Box>
        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius={"lg"}
          color="black"
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Login/>
              </TabPanel>
              <TabPanel>
                <Signup/>
              </TabPanel>
              =
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Suspense>
  );
}
