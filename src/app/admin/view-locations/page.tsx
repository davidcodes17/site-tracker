"use client";
// import CustomIframe from "@/app/components/CustomIframe";

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
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Logout } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../../route";

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
  uuid: string;
}

const page = () => {
  const [data, setData] = useState<Location[]>([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      fetch(HOST + "/get-location", {
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
          width={{ lg: "30vw", md: "30vw", sm: "100%", base: "100%" }}
          height={"100vh"}
          p={5}
        >
          <Heading fontWeight={900}>Devices & Locations</Heading>
          <Box mt={5}>
            {data.length <= 0 ? (
              <Spinner />
            ) : (
              <Accordion>
                {data.map((data, key) => (
                  <AccordionItem>
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
            width={"100%"}
            mt={5}
            onClick={() => {
              localStorage.clear();
              location.href = "/admin";
            }}
            leftIcon={<Logout color="#fff" />}
          >
            Logout
          </Button>
        </Box>
        {/* <CustomIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.362949556452!2d3.379206!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94015ce8dd3b4caf!2sRedemption%20Resort%2C%20redemption%20camp!5e0!3m2!1sen!2sng!4v1713624717709!5m2!1sen!2sng" /> */}
      </Flex>
    </Box>
  );
};

export default page;
