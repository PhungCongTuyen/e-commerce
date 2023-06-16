import { Avatar, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
type Props = {
  helperName?: string;
  avatar?: string;
};
const HelperContact: React.FC<Props> = ({ helperName, avatar }) => {
  const { t } = useTranslation("detail");
  return (
    <Box className="flex gap-4 items-center mt-4">
      <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
      <Box>
        <Box className="font-bold text-content-12">
          {helperName || "Nguyễn Ngọc Phượng"}
        </Box>
        <Box className="text-content-10">{t("helper_position")}</Box>
        <Box className="text-content-10">
          {t("call")}
          <Box className="font-bold" component={"span"}>
            1900 2207
          </Box>
          {t("press_to_call")}
          <Box className="font-bold" component={"span"}>
            109
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HelperContact;
