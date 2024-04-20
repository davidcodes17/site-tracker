"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  useToast,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Eye, EyeSlash } from "iconsax-react";
import React, { useState } from "react";
import { HOST } from "../../../route";

const page = () => {
  const [see, setSee] = useState(false);
  const toast = useToast();
  const [type, setType] = useState("password");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    fetch(HOST + "/login")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast({
          title: "Login Success",
          description: "You've just logged in",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }).catch((err)=>{
        toast({
            title: 'Login Failed.',
            description: err.error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
      })
  };
  return (
    <Box>
      <Flex>
        <Image
          bg={"darkorchid"}
          height={"100vh"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          src="/side.svg"
          width={"50vw"}
        />
        <Box
          pt={100}
          px={{ lg: 150, md: 100, sm: 50, base: 20 }}
          width={"100%"}
        >
          <Heading>Welcome, Back 🧑‍💻</Heading>
          <Text>Please fill in your appropirate details</Text>
          <Box mt={10}>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input placeholder="you@gmail.com" />
            </FormControl>
            <FormControl pt={5}>
              <FormLabel>Password</FormLabel>
              <Flex
                alignItems={"center"}
                border={"1px solid #eee"}
                px={2}
                borderRadius={5}
              >
                <Input
                  placeholder="*******************"
                  type={type}
                  border={0}
                  _focus={{ boxShadow: "none" }}
                />
                <Box>
                  {see ? (
                    <Box
                      onClick={() => {
                        setSee(false);
                        setType("password");
                      }}
                    >
                      <Eye color="#eee" />
                    </Box>
                  ) : (
                    <Box
                      onClick={() => {
                        setSee(true);
                        setType("text");
                      }}
                    >
                      <EyeSlash color="#000" />
                    </Box>
                  )}
                </Box>
              </Flex>
            </FormControl>

            <Button
              width={"100%"}
              mt={5}
              py={6}
              _hover={{
                bg: "darkorchid",
              }}
              onClick={() => {
                login();
              }}
              bg={"darkorchid"}
              color={"#fff"}
            >
              {!loading ? "Login" : <Spinner color="#fff" />}
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default page;
