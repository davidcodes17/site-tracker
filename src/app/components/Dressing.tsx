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
      width={width}
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
