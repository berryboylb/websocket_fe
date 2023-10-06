/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
import React from "react";
import { VStack, Button, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pic, setPictures] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const handleClick = () => setShow((k) => !k);
  const handleLoading = () => setLoading((k) => !k);
  const postDetails = async (file: File) => {
    handleLoading();
    if (pic === undefined) {
      toast({
        title: "Please select an image",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (file.type === "image/jpeg" || file.type === "image/png") {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "ml_default");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dbtew7i90/image/upload",
        data
      );
      if (!(res.status == 200))
        toast({
          title: "Image upload not successful",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom",
        });
      setPictures(res?.data?.secure_url);
      handleLoading();
    } else {
      toast({
        title: "Please select a valid image jpeg/png",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      handleLoading();
      return;
    }
  };
  const submitHandler = async () => {
    handleLoading();
    if (!name || !email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
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
        "http://localhost:5000/api/user",
        { name, email, password, pic },
        config
      );
      toast({
        title: "Registration is successful",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      handleLoading();
      localStorage.setItem("user", JSON.stringify(response.data.data));
      navigate("/chats");
    } catch (err:any) {
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
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
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

      <FormControl id="con-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type={"file"}
          p={1.5}
          accept="image/*"
          onChange={async (e) =>
            e.target.files &&
            e.target.files?.length > 0 &&
            (await postDetails(e.target.files[0]))
          }
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
