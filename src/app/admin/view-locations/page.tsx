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
  Text,
} from "@chakra-ui/react";
import { Logout } from "iconsax-react";
import React from "react";

const page = () => {
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
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Samsung A32
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <DeviceDetails detail="12.215.217.245" topic="IP Address" />
                    <DeviceDetails detail="+234" topic="Country Code" />
                    <DeviceDetails detail="Nigeria" topic="Country Name" />
                    <DeviceDetails detail="Redemption City" topic="City" />
                    <DeviceDetails detail="263636362525252" topic="Latitude" />
                    <DeviceDetails
                      detail="609649418222993"
                      topic="Longtitude"
                    />
                    <DeviceDetails detail="Google Chrome" topic="Browser" />
                    <DeviceDetails detail="3.4.5" topic="Browser Version" />
                    <DeviceDetails detail="Infinix" topic="Device Brand" />
                    <DeviceDetails detail="HOT 30" topic="Device Model" />
                    <DeviceDetails detail="Android" topic="Device Family" />
                    <DeviceDetails detail="XOS" topic="OS" />
                    <DeviceDetails detail="13.0" topic="OS Version" />
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Button
            bg={"darkorchid"}
            color={"#fff"}
            width={"100%"}
            mt={5}
            leftIcon={<Logout color="#fff" />}
          >
            Logout
          </Button>
        </Box>
        <CustomIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.362949556452!2d3.379206!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94015ce8dd3b4caf!2sRedemption%20Resort%2C%20redemption%20camp!5e0!3m2!1sen!2sng!4v1713624717709!5m2!1sen!2sng" />
      </Flex>
    </Box>
  );
};

export default page;
