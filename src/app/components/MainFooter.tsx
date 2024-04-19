import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

const MainFooter = () => {
  return (
    <Box width={"100%"} py={40} px={20} bg={"#ddd"}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box width={300}>
          <Logo />
          <Text py={5}>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Text>
          <Flex gap={2}>
            <BsTwitterX size={30} />
            <BsFacebook size={30} />
            <BsInstagram size={30} />
            <BsGithub size={30} />
          </Flex>
        </Box>

        <Box mt={{ lg: 0, md: 10, sm: 10, base: 10 }}>
          <Heading fontSize={20}>COMPANY</Heading>
          <Text>About</Text>
          <Text>Features</Text>
          <Text>Works</Text>
          <Text>Career</Text>
        </Box>
        <Box mt={{ lg: 0, md: 10, sm: 10, base: 10 }}>
          <Heading fontSize={20}>HELP</Heading>
          <Text>Customer Support</Text>
          <Text>Delivery Details</Text>
          <Text>Terms and Conditions</Text>
          <Text>Privacy Policy</Text>
        </Box>
        <Box mt={{ lg: 0, md: 10, sm: 10, base: 10 }}>
          <Heading fontSize={20}>FAQ</Heading>
          <Text>Account</Text>
          <Text>Manage Deliveries</Text>
          <Text>Orders</Text>
          <Text>Payments</Text>
        </Box>
        <Box mt={{ lg: 0, md: 10, sm: 10, base: 10 }}>
          <Heading fontSize={20}>RESOURCES</Heading>
          <Text>Free eBooks</Text>
          <Text>Developement Tutorial</Text>
          <Text>How to - Blog</Text>
          <Text>Youtube Playlist</Text>
        </Box>
      </Flex>

      <hr
        style={{
          margin: "40px 0px",
          height: 1,
          background: "#000",
          borderRadius: 40,
        }}
      />

      <Flex
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          base: "center",
        }}
        flexWrap={"wrap"}
      >
        <Text>Shop.co © 2000-2023, All Rights Reserved</Text>

        <Image src={"/cards.png"} />
      </Flex>
    </Box>
  );
};

export default MainFooter;
