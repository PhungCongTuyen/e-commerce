import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import QRCode from "../../../assets/images/qrcode.png";
import AppStore from "../../../assets/images/appstore.png";
import GooglePlay from "../../../assets/images/googleplay.png";

const DownloadApp = () => {
  const { t } = useTranslation("footer");
  return (
    <Box>
      <Box className="text-content-16 text-black-1 font-semibold">
        {t("download-app")}
      </Box>
      <Box className="mt-4 flex gap-2">
        <img src={QRCode} alt="" />
        <Box className="flex flex-col gap-2">
          <Box
            className="w-[120px] h-9"
            href="/"
            component={"a"}
            sx={{
              backgroundImage: `url(${AppStore})`,
              objectFit: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "white",
            }}
          >
            {""}
          </Box>
          <Box
            className="w-[120px] h-9"
            component={"a"}
            href="/"
            sx={{
              backgroundImage: `url(${GooglePlay})`,
              objectFit: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "white",
            }}
          >
            {""}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
