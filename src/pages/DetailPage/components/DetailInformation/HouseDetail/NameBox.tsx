import { Box, Button, Divider, Rating } from "@mui/material";
import React from "react";
import RatingLabel from "../../../../../utils/constants/ratingConstant";
import { RoomOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export type Position = {
  longitude?: number;
  latitude?: number;
};

type Props = {
  houseName?: string;
  rating?: number;
  address?: string;
  position?: Position;
};

const NameBox: React.FC<Props> = ({ houseName, rating, address, position }) => {
  const { t } = useTranslation("detail");

  const handleClickOpenMap = () => {
    const { longitude, latitude } = position as Position;
    if (!!longitude && !!latitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`;
      window.open(url, "_blank");
    }
  };

  return (
    <Box>
      <Box className="text-content-18 font-bold">{houseName}</Box>
      <Box className="flex items-center">
        <Rating name="disabled" value={rating} disabled size="small" />
        <Box className="text-content-12 ml-2">
          {RatingLabel(rating?.toString() || "")}
        </Box>
        <Button className="!text-content-12 !text-brand-1 !normal-case">
          {t("watch_rating")}
        </Button>
      </Box>
      <Box className="text-content-12">
        <RoomOutlined className="!text-content-14" />
        {address}
        <Button
          className="!text-content-12 !text-brand-1 !normal-case"
          onClick={handleClickOpenMap}
        >
          {t("watch_map")}
        </Button>
      </Box>
      <Divider className="!my-2" />
    </Box>
  );
};

export default NameBox;
