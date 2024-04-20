import { Box, Flex, Heading } from "@chakra-ui/react";
import Dressing from "../components/Dressing";

const DressStyle = () => {
  return (
    <Box bg={"#ddd"} mx={{lg : 40, md : 10, sm : 5}} my={20} px={{lg : 20, md : 20, sm : 10, base : 10}} py={10} borderRadius={20}>
      <Heading fontWeight={900} fontSize={{lg : 50, md : 50, sm : "40px", base : "40px"}} textAlign={"center"} pb={{lg : 10, md : 10, sm : 0, base: 0}}>
        BROWSE BY DRESS STYLE
      </Heading>
      <Flex gap={10} display={{lg : "flex", md : "flex", sm : "block", base : "block"}} justifyContent={"center"}>
        <Dressing height="250px" width="400px" image="dress1.png" text="Casual" key={1} />
        <Dressing height="250px" width="500px" image="dress2.png" text="Formal" key={1} />
      </Flex>
      <Flex pt={{lg : 10, md : 10, sm : 0, base : 0}} display={{lg : "flex", md : "flex", sm : "block", base : "block"}} gap={10} justifyContent={"center"}>
        <Dressing height="250px" width="500px" image="dress3.png" text="Party" key={1} />
        <Dressing height="250px" width="400px" image="dress4.png" text="Gym" key={1} />
      </Flex>
    </Box>
  );
};

export default DressStyle;
