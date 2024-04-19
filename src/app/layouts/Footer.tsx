import { Box } from "@chakra-ui/react";
import React from "react";
import SubFooter from "../components/SubFooter";
import MainFooter from "../components/MainFooter";

const Footer = () => {
  return (
    <Box mt={40} position={"relative"}>
      <SubFooter />
      <MainFooter />
    </Box>
  );
};

export default Footer;
