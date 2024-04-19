import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const SubFooter = () => {
  return (
    <Box
      px={{ lg: 40, md: 40, sm: 10, base: 10 }}
      pos={"absolute"}
      top={{ lg: -20, md: -40, sm: -40, base: -40 }}
      left={0}
      right={0}
    >
      <Flex
        justifyContent={{
          lg: "space-between",
          md: "center",
          sm: "center",
          base: "center",
        }}
        width={"100%"}
        flexWrap={"wrap"}
        bg={"#000"}
        alignItems={"center"}
        px={{ lg: 20, md: 20, sm: 0, base: 0 }}
        borderRadius={{ lg: 100, md: 70, sm: 40, base: 40 }}
        py={{ lg: 8, md: 8, sm: 10, base: 5 }}
      >
        <Heading
          fontWeight={900}
          fontSize={{ lg: 40, md: 40, sm: "20px", base: 20 }}
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          color={"#fff"}
        >
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </Heading>
        <Box mt={{ lg: 0, md: 5, sm: 5, base: 5 }}>
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
