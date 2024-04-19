import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const SubFooter = () => {
  return (
    <Box px={40} pos={"absolute"} top={-20} left={0} right={0}>
      <Flex justifyContent={"space-between"} bg={"#000"} alignItems={"center"} px={20} borderRadius={100} py={8}>
        <Heading fontWeight={900} color={"#fff"}>
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </Heading>
        <Box>
          <Flex
            border={"1px solid #ddd"}
            alignItems={"center"}
            px={5}
            bg={"#fff"}
            py={1}
            borderRadius={40}
          >
            <MdEmail color="#fff" size={20} />
            <Input
              border={"none"}
              fontSize={12}
              width={200}
              _focus={{ boxShadow: "none" }}
              placeholder="Enter your email address"
            />
          </Flex>
          <Button
            bg={"#fff"}
            color={"#000"}
            _hover={{ bg: "#fff" }}
            width={"100%"}
            mt={2}
            fontSize={12}
            borderRadius={40}
            py={6}
          >
            Subscribe to Newsletter
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SubFooter;
