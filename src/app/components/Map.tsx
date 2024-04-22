import React, { useEffect, useRef } from "react";

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ lat, lng, zoom = 10 }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const loadMap = () => {
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIw87YsX4sjpYE0xVW7vPhq6GtHTN2Tkc&libraries=places`;
      window.document.body.appendChild(googleMapsScript);
      googleMapsScript.addEventListener("load", initializeMap);
    };

    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current!, {
        center: { lat, lng },
        zoom: zoom,
      });

      new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
      });
    };

    if (!window.google) {
      loadMap();
    } else {
      initializeMap();
    }

    return () => {
      // Clean up map resources if needed
    };
  }, [lat, lng, zoom]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Map;
