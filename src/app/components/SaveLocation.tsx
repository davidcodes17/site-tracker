"use client";
import React, { useEffect, useRef } from "react";

function SaveLocation({ location, coords, apijson }: any) {
  const saveLocation = async () => {
    const data = {
      ipAddress: location.ipAddress,
      countryCode: location.countryCode,
      countryName: location.countryName,
      postal: apijson.postal,
      country_capital: apijson.country_capital,
      country_tld: apijson.country_tld,
      deviceMemory:
        "deviceMemory" in window.navigator &&
        String(window.navigator.deviceMemory),
      dataNetwork: apijson.org,
      keyboardLanguage: apijson.languages,
      screenSize: `${window.innerWidth} ${window.innerHeight}`,
      timezone: apijson.timezone,
      country_calling_code: apijson.country_calling_code,
      currency: apijson.currency,
      currency_name: apijson.currency_name,
      city: location.city,
      latitude: String(
        coords ? coords.latitude : location.cityLatLong.split(",")[0]
      ),
      longitude: String(
        coords ? coords.latitude : location.cityLatLong.split(",")[1]
      ),
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
    if (location || coords || apijson) {
      if ($init.current) {
        return;
      }
      saveLocation();
      $init.current = true;
    }
  }, [location, apijson, coords]);

  return <div></div>;
}

export default SaveLocation;
