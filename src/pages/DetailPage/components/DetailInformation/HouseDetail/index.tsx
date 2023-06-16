import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import listIcon from "../../../../../utils/constants/iconConstant";
import NameBox, { Position } from "./NameBox";
import ListRoom, { RoomDetail } from "./ListRoom";
import ListProperties, { Properties } from "./ListProperties";

type Props = {
  houseName?: string;
  rating?: number;
  address?: string;
  position?: Position;
  roomDetail?: RoomDetail;
  properties?: Properties;
};

const HouseDetail: React.FC<Props> = (props) => {
  const { t } = useTranslation("detail");
  return (
    <Box>
      <Box className="text-content-18 font-bold text-brand-1 mb-2">
        {t("bds_detail")}
      </Box>
      <Box className="p-4">
        <NameBox {...props} />
        <ListRoom {...props} />
        <ListProperties {...props} />
      </Box>
    </Box>
  );
};

export default HouseDetail;
