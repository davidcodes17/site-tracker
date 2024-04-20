"use client";
import { Box } from "@chakra-ui/react";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import NewArrival from "./layouts/NewArrival";
import DressStyle from "./layouts/DressStyle";
import CustomersReviews from "./layouts/CustomersReviews";
import Footer from "./layouts/Footer";

import { useEffect, useRef } from "react";
import useVisitor from "@/hooks/useVisitor";
import { useGeolocated } from "react-geolocated";
import SaveLocation from "./components/SaveLocation";

const page = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const $visitor = useVisitor();
  useEffect(() => {
    $visitor.getVisitor();
  }, []);
  return (
    <Box>
      <SaveLocation location={$visitor.visitor} coords={coords} />
      <Header />
      <Hero />
      <NewArrival />
      <DressStyle />
      <CustomersReviews />
      <Footer />
    </Box>
  );
};

export default page;
