import React from "react";
import CardItem from "../../../components/CardItem";
import { Box } from "@mui/material";
import TitleWithRoute, {
  TitleWithRouteType,
} from "../../../components/TitleWithRoute";
import { useTranslation } from "react-i18next";
import ROUTES from "../../../utils/constants/routesConstant";

const LongTimePlace = () => {
  const { t } = useTranslation("home");
  return (
    <Box>
      <TitleWithRoute
        buttonText={t("watch_all")}
        href={ROUTES.BDS_FOR_SELL}
        title={
          <>
            <Box>{t("long_time_place_title")}</Box>
            <Box className="text-grey-1">
              {t("long_time_place_detail", { counter: 311 })}
            </Box>
          </>
        }
        type={TitleWithRouteType.BACKGROUND_TITLE}
      />
      <Box className="flex flex-wrap gap-5">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Box>
    </Box>
  );
};

export default LongTimePlace;
