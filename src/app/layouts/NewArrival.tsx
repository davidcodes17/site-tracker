import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../products";

const NewArrival = () => {
  return (
    <Box mt={"150px"}>
      <Heading textAlign={"center"} fontSize={60} pb={20} fontWeight={800}>
        NEW ARRIVALS
      </Heading>

      <Flex flexWrap={"wrap"} gap={20} px={40} justifyContent={"center"}>
        {products.map((product, key) => (
          <ProductCard
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            key={key}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default NewArrival;
