import React from "react";
import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutUs from "./components/AboutUs";
import HelpCenter from "./components/HelpCenter";
import Payment from "./components/Payment";
import DownloadApp from "./components/DownloadApp";

const Footer = () => {
  const { t } = useTranslation("footer");
  const listFooter = [
    <AboutUs />,
    <HelpCenter />,
    <Payment />,
    <DownloadApp />,
  ];
  return (
    <Box component={"div"} className="bg-icon w-full min-h-[500px] py-[60px]">
      <Box className="flex flex-wrap justify-around">
        {listFooter.map((item, index) => (
          <Box key={index}>{item}</Box>
        ))}
      </Box>
      <Divider
        variant="middle"
        className="!mx-[112px] !my-[49px]"
        sx={{ borderStyle: "dashed", borderColor: "white", borderWidth: "1px" }}
      />
      <Box className="text-center text-black-1">
        <Box className="font-bold text-content-32">{t("company_name")}</Box>
        <Box className="text-content-16 mt-4">{t("address")}</Box>
        <Box className="text-content-16 mt-4">
          {t("copyright")}
          <Box component={"span"} className="font-bold">
            {t("copyright_stack")}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
