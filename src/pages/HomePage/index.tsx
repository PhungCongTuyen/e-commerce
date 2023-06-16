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
import HouseTypes from "./components/HouseTypes";
import BDSNews from "./components/BDSNews";
import Filter from "../../components/Filter";
import { GetApiMethodInstance } from "../../services";

const HomePage = () => {
  React.useEffect(() => {}, []);
  const isFlashSale = true;
  return (
    <Box>
      <Filter />
      <Box className="max-w-[1440px] mx-auto px-14">
        <DiscoveryNearby />
        <HouseTypes />
        <Box className="flex flex-col gap-20">
          {isFlashSale && <FlashSaleInDay />}
          <FavoritePlace />
          <ShortTimePlace />
          <LongTimePlace />
          <CarForRent />
          <ViewedPlaces />
          <BDSNews />
        </Box>
        <Partner />
      </Box>
    </Box>
  );
};

export default HomePage;
