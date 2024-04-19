import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CountAnalysis = () => {
  return (
    <Flex mt={5} alignItems={"center"}>
      <Box pr={{ lg: 5, md: 5, sm: 5, base: 5 }}>
        <Heading fontSize={{ lg: 50, md: 40, sm: "40px", base: "40px" }}>
          200+
        </Heading>
        <Text fontSize={{lg : 15, md : 15, sm : 12, base : 12}}>International Brands</Text>
      </Box>
      <Box
        borderLeft={"1px solid #aaa"}
        borderRight={"1px solid #aaa"}
        px={{ lg: 5, md: 5, sm: 3, base: 3 }}
      >
        <Heading fontSize={{ lg: 50, md: 40, sm: "40px", base: "40px" }}>
          2,000+
        </Heading>
        <Text fontSize={{lg : 15, md : 15, sm : 12, base : 12}}>High Quality Products</Text>
      </Box>
      <Box pl={{ lg: 5, md: 5, sm: 5, base: 5 }}>
        <Heading fontSize={{ lg: 50, md: 40, sm: "40px", base: "40px" }}>
          30,000+
        </Heading>
        <Text fontSize={{lg : 15, md : 15, sm : 12, base : 12}}>Happy Customers</Text>
      </Box>
    </Flex>
  );
};

export default CountAnalysis;
