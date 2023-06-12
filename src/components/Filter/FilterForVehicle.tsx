import { DirectionsCarOutlined, TwoWheelerOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const FilterForVehicle = () => {
  const { t } = useTranslation("home");
  return (
    <Box className="flex gap-5">
      <Button
        className="h-12 !bg-brand-1 !normal-case !font-bold !text-content-12 !text-white !rounded-xl !px-6"
        startIcon={<DirectionsCarOutlined />}
      >
        {t("rent_a_car")}
      </Button>
      <Button
        className="h-12 !bg-brand-1 !normal-case !font-bold !text-content-12 !text-white !rounded-xl !px-6"
        startIcon={<TwoWheelerOutlined />}
      >
        {t("rent_a_motobike")}
      </Button>
    </Box>
  );
};

export default FilterForVehicle;
