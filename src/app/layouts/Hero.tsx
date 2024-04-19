import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Bag2 } from "iconsax-react";
import React from "react";
import CountAnalysis from "../components/CountAnalysis";

const Hero = () => {
  return (
    <>
      <Box
        bgSize={"cover"}
        pt={{ lg: 20, md: 20, sm: 20, base: 10 }}
        bgRepeat={"no-repeat"}
        bgImage={"url('/bg.svg')"}
        height={{lg : "90vh", md : "90vh", sm : "90vh", base: "70vh"}}
        width={"100%"}
      >
        <Flex>
          <Box
            width={{ lg: 900, md: 800, sm: "100%", base: "100%" }}
            mt={{ lg: 10, md: 10, sm: 0, base: 10 }}
            p={{lg : 10, md : 10, sm : 5, base:5}}
          >
            <Heading fontWeight={900} fontSize={{ lg: 70, md: 70, sm: 50, base : 50 }}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </Heading>
            <Text width={{ lg: 600, md: 500, sm: "100%", base: "100%" }}>
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
        <Flex
          justifyContent={"space-between"}
          overflowX={"scroll"}
          px={10}
          gap={10}
          pt={{lg : 4, md : 4, sm : 6, base : 7}}
        >
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
          <Image src="/gucci.svg" />
          <Image src="/prada.svg" />
          <Image src="/zara.svg" />
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
