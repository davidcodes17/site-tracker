"use client";
import { Box, Flex, Input, Spinner } from "@chakra-ui/react";
import { SearchNormal } from "iconsax-react";
import React, { useState } from "react";

const SearchCompo = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      <Flex alignItems={"center"} bg={"none"} px={5} borderRadius={20}>
        {!loading ? <SearchNormal color="#aaa" size={15} /> : <Spinner size={"sm"} />}
        <Input
          border={0}
          borderRadius={20}
          fontSize={12}
          onChange={(e) => {
            e.target.value.length > 0 ? setLoading(true) : setLoading(false);
          }}
          placeholder="Search for products"
          _focus={{ boxShadow: "none" }}
          width={{lg : 500, md : 500, sm : "100%"}}
        />
      </Flex>
    </Box>
  );
};

export default SearchCompo;
