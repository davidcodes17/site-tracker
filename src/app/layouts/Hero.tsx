import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Bag2 } from "iconsax-react";
import React from "react";
import CountAnalysis from "../components/CountAnalysis";

const Hero = () => {
  return (
    <>
      <Box
        bgSize={"cover"}
        pt={20}
        bgRepeat={"no-repeat"}
        bgImage={"url('/bg.svg')"}
        height={"90vh"}
        width={"100%"}
      >
        <Flex>
          <Box width={900} mt={10}  p={10}>
            <Heading fontWeight={900} fontSize={70}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </Heading>
            <Text width={600}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Text>
            <Button
              leftIcon={<Bag2 color="#fff" size={30} />}
              _hover={{ bg: "#000" }}
              bg={"#000"}
              my={4}
              color={"#fff"}
              px={10}
              py={7}
              borderRadius={20}
            >
              Shop Now
            </Button>

            <CountAnalysis />
          </Box>
        </Flex>
      </Box>
      <Box width={"100%"} bg={"#000"} height={"10vh"}>
        <Flex justifyContent={"space-between"} px={10} pt={4}>
            <Image src="/gucci.svg" />
            <Image src="/prada.svg" />
            <Image src="/zara.svg" />
            <Image src="/gucci.svg" />
            <Image src="/prada.svg" />
            <Image src="/zara.svg" />
        </Flex>
      </Box>
    </>
  );
};

export default Hero;
