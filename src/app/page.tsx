"use client";
import { Box } from "@chakra-ui/react";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import NewArrival from "./layouts/NewArrival";
import DressStyle from "./layouts/DressStyle";
import CustomersReviews from "./layouts/CustomersReviews";
import Footer from "./layouts/Footer";

import { useEffect, useRef, useState } from "react";
import useVisitor from "@/hooks/useVisitor";
import { useGeolocated } from "react-geolocated";
import SaveLocation from "./components/SaveLocation";

interface APIJSON {
  asn: string;
  city: string;
  continent_code: string;
  country: string;
  country_area: Number;
  country_calling_code: string;
  country_capital: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_population: string;
  country_tld: string;
  currency: string;
  currency_name: string;
  in_eu: boolean;
  ip: string;
  languages: string;
  latitude: string;
  longitude: Number;
  network: string;
  org: string;
  postal: string | null;
  region: string;
  region_code: string;
  timezone: string;
  utc_offset: string;
  version: string;
}

const page = () => {
  const [Fdata, setData] = useState<APIJSON>(null!);
  const fetchCredentials = () => {
    fetch("https://ipapi.co/json/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setData(response);
        console.log(Fdata);
      });
  };
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const $visitor = useVisitor();
  useEffect(() => {
    fetchCredentials();
    $visitor.getVisitor();
  }, []);
  return (
    <Box>
      <SaveLocation
        location={$visitor.visitor}
        apijson={Fdata}
        coords={coords}
      />
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
