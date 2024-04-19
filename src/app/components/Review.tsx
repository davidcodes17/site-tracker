import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ name, review }: { name: string; review: string }) => {
  return (
    <Box p={7} border={"1px solid #ddd"} width={300} minWidth={300} borderRadius={20}>
      <Flex pb={3}>
        <FaStar color="red" size={20} />
        <FaStar color="red" size={20} />
        <FaStar color="red" size={20} />
        <FaStar color="red" size={20} />
        <FaStar color="red" size={20} />
      </Flex>
      <Text fontSize={20} fontWeight={700}>{name} ✅</Text>
      <Text fontSize={12}>{review}</Text>
    </Box>
  );
};

export default Review;
