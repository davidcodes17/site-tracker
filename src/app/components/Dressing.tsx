import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Dressing = ({
  text,
  image,
  width,
  height,
}: {
  text: string;
  image: string;
  width: string;
  height: string;
}) => {
  return (
    <Box
      borderRadius={20}
      mt={10}
      width={{lg : width, md : width , sm : "100%", base: "100%"}}
      p={5}
      bgSize={"cover"}
      height={height}
      bgImage={`url('/${image}')`}
    >
      <Heading>{text}</Heading>
    </Box>
  );
};

export default Dressing;
