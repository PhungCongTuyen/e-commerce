import {
  FavoriteBorderOutlined,
  ShareOutlined,
  WarningAmberRounded,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Social = () => {
  const { t } = useTranslation("detail");

  const listButton = [
    { icon: <FavoriteBorderOutlined />, value: "" },
    { icon: <ShareOutlined />, value: "" },
    { icon: <WarningAmberRounded />, value: "" },
  ];
  return (
    <Box>
      <Box className="text-content-14 font-bold text-brand-1">
        {t("share_the_post")}
      </Box>
      <Box>
        {listButton.map((item, index) => (
          <IconButton key={index} className="!text-access-green">
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Social;
