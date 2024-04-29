"use client";
import CustomIframe from "@/app/components/CustomIframe";

import DeviceDetails from "@/app/components/DeviceDetails";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Logout } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Map from "@/app/components/Map";

interface Location {
  browser: string;
  browserVersion: string;
  city: string;
  countryCode: string;
  countryName: string;
  createdAt: string;
  deviceBrand: string;
  deviceFamily: string;
  deviceModel: string;
  id: Number;
  ipAddress: string;
  latitude: string;
  longitude: string;
  os: string;
  osVersion: string;
  postal: string;
  country_capital: string;
  country_tld: string;
  deviceMemory: string;
  dataNetwork: string;
  keyboardLanguage: string;
  screenSize: string;
  timezone: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  uuid: string;
}

const API_KEY = "AIzaSyCIw87YsX4sjpYE0xVW7vPhq6GtHTN2Tkc";

const page = () => {
  const [data, setData] = useState<Location[]>([]);
  const [isSelected, setIsSelected] = useState({
    lon: 0,
    lat: 0,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/admin/get-location", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((datas) => {
          setData(datas.data);
          console.log(datas);
        });
    } else {
      location.href = "/admin";
    }
  }, []);

  return (
    <Box>
      <Flex
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          base: "center",
        }}
        flexDir={{
          sm: "column-reverse",
          base: "column-reverse",
          md: "row",
          lg: "row",
        }}
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
      >
        <Box
          width={{ lg: "50vw", md: "50vw", sm: "100%", base: "100%" }}
          height={"100vh"}
          p={5}
          pb={10}
        >
          <Heading fontWeight={900}>Devices & Locations</Heading>
          <Box mt={5}>
            {data.length <= 0 ? (
              <Spinner />
            ) : (
              <Accordion>
                {data.map((data, key) => (
                  <AccordionItem
                    key={key}
                    onClick={() => {
                      setIsSelected({
                        lat: Number(data.latitude),
                        lon: Number(data.longitude),
                      });
                      console.log(isSelected);
                    }}
                  >
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {data.os}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <DeviceDetails
                          detail={data.ipAddress}
                          topic="IP Address"
                        />
                        <DeviceDetails
                          detail={data.countryCode}
                          topic="Country Code"
                        />
                        <DeviceDetails
                          detail={data.countryName}
                          topic="Country Name"
                        />
                        <DeviceDetails detail={data.city} topic="City" />
                        <DeviceDetails
                          detail={data.latitude}
                          topic="Latitude"
                        />
                        <DeviceDetails
                          detail={data.longitude}
                          topic="Longtitude"
                        />
                        <DeviceDetails detail={data.browser} topic="Browser" />
                        <DeviceDetails
                          detail={data.browserVersion}
                          topic="Browser Version"
                        />
                        <DeviceDetails
                          detail={data.deviceBrand}
                          topic="Device Brand"
                        />
                        <DeviceDetails
                          detail={data.deviceModel}
                          topic="Device Model"
                        />
                        <DeviceDetails
                          detail={data.deviceFamily}
                          topic="Device Family"
                        />
                        <DeviceDetails detail={data.os} topic="OS" />
                        <DeviceDetails
                          detail={data.osVersion}
                          topic="OS Version"
                        />
                        <DeviceDetails detail={data.postal} topic="Postal" />
                        <DeviceDetails
                          detail={data.createdAt}
                          topic="Date"
                        />
                        <DeviceDetails
                          detail={data.country_capital}
                          topic="Country Capital"
                        />
                        <DeviceDetails
                          detail={data.country_tld}
                          topic="Country Tld"
                        />
                        <DeviceDetails
                          detail={data.deviceMemory + "GB RAM"}
                          topic="Device Memory"
                        />
                        <DeviceDetails
                          detail={data.dataNetwork}
                          topic="Device Network"
                        />
                        <DeviceDetails
                          detail={data.keyboardLanguage}
                          topic="Keyboard Language"
                        />
                        <DeviceDetails
                          detail={
                            data.screenSize
                              ? data.screenSize.replace(" ", "X")
                              : "Waiting"
                          }
                          topic="Screen Size"
                        />
                        <DeviceDetails
                          detail={data.timezone}
                          topic="Time Zone"
                        />
                        <DeviceDetails
                          detail={data.country_calling_code}
                          topic="Country Calling Code"
                        />
                        <DeviceDetails
                          detail={data.currency}
                          topic="Currency"
                        />
                        <DeviceDetails
                          detail={data.currency_name}
                          topic="Currency Name"
                        />
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </Box>
          <Button
            bg={"darkorchid"}
            color={"#fff"}
            width={"400px"}
            my={5}
            onClick={() => {
              localStorage.clear();
              location.href = "/admin";
            }}
            leftIcon={<Logout color="#fff" />}
          >
            Logout
          </Button>
        </Box>
        {/* 
        {isSelected && (
          <Image
            src={`https://maps.googleapis.com/maps/api/staticmap?center=
            ${isSelected.lat},${isSelected.lon}&zoom=14&size=400x300&sensor=false&key=${API_KEY}`}
          />
        )} */}

        <Box width={{ lg: "50vw", md: "50vw", sm: "100vw", base: "100vw" }} pos={"fixed"}>
          <Map lat={isSelected.lat} lng={isSelected.lon} />
        </Box>
      </Flex>
    </Box>
  );
};

export default page;
