"use client";
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SearchCompo from "./SearchCompo";
import UserCartCompo from "./UserCartCompo";
import Logo from "./Logo";
import { HambergerMenu, User } from "iconsax-react";
import { BiCart } from "react-icons/bi";

const Nav = () => {
  const [bg, setBg] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
      <Flex
        gap={10}
        display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
      >
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

      <Flex alignItems={"center"} gap={5}>
        <BiCart size={30} />
        <User variant="Bold" />
        <Box onClick={onOpen} ref={btnRef} cursor={"pointer"}>
          <HambergerMenu size={30} />
        </Box>
      </Flex>

      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent px={5} pt={10}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Logo />
              <CloseButton onClick={onClose} />
            </Flex>

            <Box lineHeight={"60px"} mt={5}>
              <Text cursor={"pointer"} fontWeight={500}>
                Shop
              </Text>
              <Text cursor={"pointer"} fontWeight={500}>
                On Sale
              </Text>
              <Text cursor={"pointer"} fontWeight={500}>
                New Arrivals
              </Text>
              <Text cursor={"pointer"} fontWeight={500}>
                Brands
              </Text>
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
};

export default Nav;
