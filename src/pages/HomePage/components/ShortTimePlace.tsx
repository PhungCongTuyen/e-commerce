import React from "react";
import CardItem from "../../../components/CardItem";
import { Box } from "@mui/material";
import TitleWithRoute, {
  TitleWithRouteType,
} from "../../../components/TitleWithRoute";
import { useTranslation } from "react-i18next";
import ROUTES from "../../../utils/constants/routesConstant";

const ShortTimePlace = () => {
  const { t } = useTranslation("home");
  return (
    <Box>
      <TitleWithRoute
        buttonText={t("watch_all")}
        href={ROUTES.BDS_FOR_RENT}
        title={
          <>
            <Box>{t("short_time_place_title")}</Box>
            <Box className="text-grey-1">
              {t("short_time_place_detail", { counter: 311 })}
            </Box>
          </>
        }
        type={TitleWithRouteType.BACKGROUND_TITLE}
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

export default ShortTimePlace;
