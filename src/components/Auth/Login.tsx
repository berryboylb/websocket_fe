/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
import React from "react";
import { VStack, Button, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleLoading = () => setLoading((k) => !k);

  const handleClick = () => setShow((k) => !k);
  const submitHandler = async () => {
    handleLoading();
    if (!email || !password) {
      toast({
        title: "Please fill all fields",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      handleLoading();
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login is successful",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      handleLoading();
      localStorage.setItem("user", JSON.stringify(response.data.data));
      navigate("/chats");
    } catch (err: any) {
      console.log(err);
      toast({
        title: err.response.data.message,
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      handleLoading();
    }
  };
  return (
    <VStack spacing="5px" color="black">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        onClick={() => {
          setEmail("guest@examplem");
          setPassword("123456");
        }}
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
      >
        Get Guest Credentials
      </Button>
    </VStack>
  );
};

export default Login;
