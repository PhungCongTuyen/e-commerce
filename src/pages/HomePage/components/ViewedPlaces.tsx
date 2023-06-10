import React from "react";
import CardItem from "../../../components/CardItem";
import { Box } from "@mui/material";
import TitleWithRoute, {
  TitleWithRouteType,
} from "../../../components/TitleWithRoute";
import { useTranslation } from "react-i18next";

const ViewedPlaces = () => {
  const { t } = useTranslation("home");
  return (
    <Box>
      <TitleWithRoute
        buttonText={t("watch_all")}
        href="/"
        title={t("viewed_places")}
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

export default ViewedPlaces;
