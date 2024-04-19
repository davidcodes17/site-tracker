import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../products";

const NewArrival = () => {
  return (
    <Box mt={{ lg: "150px", md: "150px", sm: "80px", base: "80px" }}>
      <Heading textAlign={"center"} fontSize={{lg : 60, md :50, sm : 40, base: "30px"}} pb={20} fontWeight={800}>
        NEW ARRIVALS
      </Heading>

      <Flex
        flexWrap={"wrap"}
        gap={20}
        px={{ lg: 40, md: 20, sm: 5, base: 5 }}
        justifyContent={"center"}
      >
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
