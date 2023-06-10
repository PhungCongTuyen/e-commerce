import React from "react";
import CardItem from "../../../components/CardItem";
import { Box, Button } from "@mui/material";
import TitleWithRoute from "../../../components/TitleWithRoute";
import { useTranslation } from "react-i18next";

enum VehicleType {
  MOTOBIKE = "MOTOBIKE",
  CAR = "CAR",
}

const CarForRent = () => {
  const [selectedType, setSelectedType] = React.useState<VehicleType>(
    VehicleType.MOTOBIKE
  );
  const { t } = useTranslation("home");

  const renderButton = () => {
    const listTitle = [
      {
        name: "Xe máy",
        value: VehicleType.MOTOBIKE,
      },
      {
        name: "Xe ô tô",
        value: VehicleType.CAR,
      },
    ];
    return listTitle.map((item, index) => (
      <Button
        key={index}
        className={`!font-bold !text-content-14 ${
          selectedType === item.value
            ? "!bg-brand-1 !text-white"
            : "!text-black-1 "
        }`}
        onClick={() => setSelectedType(item.value)}
      >
        {item.name}
      </Button>
    ));
  };

  return (
    <Box>
      <TitleWithRoute
        buttonText={t("watch_all")}
        href="/"
        title={
          <Box className="flex items-center gap-4">
            <Box className="text-white text-content-title font-bold bg-brand-1 px-6 py-2 rounded-tr-xl rounded-br-xl">
              {t("vehicle_for_rent")}
            </Box>
            {renderButton()}
          </Box>
        }
      />
      <Box className="flex flex-wrap gap-5">
        <Box className="w-[516px] flex justify-center items-center bg-black rounded-xl">
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
        <CardItem />
        <CardItem />
        <CardItem />
      </Box>
    </Box>
  );
};

export default CarForRent;
