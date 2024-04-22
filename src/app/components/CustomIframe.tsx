import { Box } from "@chakra-ui/react";
import React from "react";

const CustomIframe = ({ src }: { src: string }) => {
  return (
    <Box
      width={{ lg: "70vw", md: "70vw", sm: "100%", base: "100%" }}
      height={{ lg: "100vh", md: "100vh", sm: "70vh", base: "70vh" }}
      p={5}
      right={0}
      pos={{ lg: "fixed", md: "fixed", sm: "relative", base: "relative" }}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: "0" }}
        loading="lazy"
        title="embedded-map"
      ></iframe>
    </Box>
  );
};

export default CustomIframe;
