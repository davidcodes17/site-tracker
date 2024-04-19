"use client";
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SearchCompo from "./SearchCompo";
import UserCartCompo from "./UserCartCompo";
import Logo from "./Logo";

const Nav = () => {
  const [bg, setBg] = useState("none");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.screenY > 20 ? setBg("#fff") : setBg("none");
    });
  }, []);
  return (
    <Flex
      pos={"fixed"}
      left={0}
      right={0}
      bg={bg}
      backdropFilter={"blur(10px)"}
      zIndex={99}
      top={0}
      alignItems={"center"}
      px={5}
      py={4}
      // boxShadow={"0px 0px 10px #eee"}
      justifyContent={"space-between"}
    >
      <Logo />
      <Flex gap={10}>
        <Text fontSize={12} fontWeight={500}>
          Shop
        </Text>
        <Text fontSize={12} fontWeight={500}>
          On Sale
        </Text>
        <Text fontSize={12} fontWeight={500}>
          New Arrivals
        </Text>
        <Text fontSize={12} fontWeight={500}>
          Brands
        </Text>
      </Flex>

      <SearchCompo />

      <UserCartCompo />
    </Flex>
  );
};

export default Nav;
