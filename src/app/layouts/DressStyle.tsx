import { Box, Flex, Heading } from "@chakra-ui/react";
import Dressing from "../components/Dressing";

const DressStyle = () => {
  return (
    <Box bg={"#ddd"} mx={40} my={20} px={20} py={10} borderRadius={20}>
      <Heading fontWeight={900} fontSize={50} textAlign={"center"} pb={10}>
        BROWSE BY DRESS STYLE
      </Heading>
      <Flex gap={10} justifyContent={"center"}>
        <Dressing height="250px" width="400px" image="dress1.png" text="Casual" key={1} />
        <Dressing height="250px" width="500px" image="dress2.png" text="Formal" key={1} />
      </Flex>
      <Flex pt={10} gap={10} justifyContent={"center"}>
        <Dressing height="250px" width="500px" image="dress3.png" text="Party" key={1} />
        <Dressing height="250px" width="400px" image="dress4.png" text="Gym" key={1} />
      </Flex>
    </Box>
  );
};

export default DressStyle;
