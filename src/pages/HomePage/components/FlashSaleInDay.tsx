import React from "react";
import CardItem from "../../../components/CardItem";
import { Box } from "@mui/material";
import TitleWithRoute, {
  TitleWithRouteType,
} from "../../../components/TitleWithRoute";
import { useTranslation } from "react-i18next";
import SaleIcon from "../../../assets/images/sale.png";

const FlashSaleInDay = () => {
  const { t } = useTranslation("home");
  return (
    <Box>
      <TitleWithRoute
        buttonText={t("watch_all")}
        href="/"
        title={
          <Box className="flex items-center gap-4">
            <Box component={"img"} src={SaleIcon} alt="" />
            <Box className="text-content-title font-bold     rounded-tr-xl rounded-br-xl">
              {t("flash_sale_in_day")}
            </Box>
          </Box>
        }
        timer={new Date().getTime()}
        type={TitleWithRouteType.FLASH_SALE}
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
        <CardItem discount="-40%" />
        <CardItem discount="-40%" />
        <CardItem discount="-40%" />
      </Box>
    </Box>
  );
};

export default FlashSaleInDay;
