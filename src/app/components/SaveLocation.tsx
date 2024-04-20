"use client";
import React, { useEffect, useRef } from "react";

function SaveLocation({ location, coords }: any) {
  const saveLocation = async () => {
    const data = {
      ipAddress: location.ipAddress,
      countryCode: location.countryCode,
      countryName: location.countryName,
      //   currencies: location.currencies /* ["NGN"] */,
      //   languages: ["eng"],
      //   region: "la",
      city: location.city,
      latitude: coords ? coords.latitude : location.cityLatLong.split(",")[0],
      longitude: coords ? coords.latitude : location.cityLatLong.split(",")[1],
      browser: location.browser,
      browserVersion: location.browserVersion,
      deviceBrand: location.deviceBrand,
      deviceModel: location.deviceModel,
      deviceFamily: location.deviceFamily,
      os: location.os,
      osVersion: location.osVersion,
    };
    fetch("/api/save-location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const $init = useRef(false);

  useEffect(() => {
    if (location || coords) {
      if ($init.current) {
        return;
      }
      saveLocation();
      $init.current = true;
    }
  }, [location]);

  return <div></div>;
}

export default SaveLocation;
