import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Partner from "./components/Partner";
import ViewedPlaces from "./components/ViewedPlaces";
import DiscoveryNearby from "./components/DiscoveryNearby";
import LongTimePlace from "./components/LongTimePlace";
import FavoritePlace from "./components/FavoritePlace";
import ShortTimePlace from "./components/ShortTimePlace";
import CarForRent from "./components/CarForRent";
import FlashSaleInDay from "./components/FlashSaleInDay";

const HomePage = () => {
  const { t } = useTranslation("home");
  const isFlashSale = true;
  return (
    <Box>
      <DiscoveryNearby />
      <Box className="flex flex-col gap-20">
        {isFlashSale && <FlashSaleInDay />}
        <FavoritePlace />
        <ShortTimePlace />
        <LongTimePlace />
        <CarForRent />
        <ViewedPlaces />
      </Box>
      <Partner />
    </Box>
  );
};

export default HomePage;
