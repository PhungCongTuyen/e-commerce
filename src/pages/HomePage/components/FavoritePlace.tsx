import React from "react";
import CardItem from "../../../components/CardItem";
import { Box } from "@mui/material";
import TitleWithRoute, {
  TitleWithRouteType,
} from "../../../components/TitleWithRoute";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ROUTES from "../../../utils/constants/routesConstant";

const FavoritePlace = () => {
  const { t } = useTranslation("home");
  const history = useHistory();
  return (
    <Box>
      <TitleWithRoute
        buttonText={t("watch_all")}
        href={ROUTES.FAVORITE_PLACE}
        title={
          <>
            <Box className="text-brand-1">{t("place_voted_by_customer")}</Box>
            <Box className="text-stroke">
              {t("long_time_place_detail", { counter: 311 })}
            </Box>
          </>
        }
        type={TitleWithRouteType.TRANSPARENT_BACKGROUND}
      />
      <Box className="flex flex-wrap gap-5">
        <CardItem
          isPropose
          onClick={() => history.push({ pathname: "/xe-cho-thue/321" })}
        />
        <CardItem isPropose />
        <CardItem isPropose />
        <CardItem isPropose />
        <CardItem isPropose />
      </Box>
    </Box>
  );
};

export default FavoritePlace;
