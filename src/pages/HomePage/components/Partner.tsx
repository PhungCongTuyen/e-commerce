import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Abbott from "../../../assets/images/Abbott.png";
import Blackmore from "../../../assets/images/Blackmore.png";
import Caesar from "../../../assets/images/Caesar.png";
import Linax from "../../../assets/images/Linax.png";
import Perfect from "../../../assets/images/Perfect.png";
import Sanofi from "../../../assets/images/Sanofi.png";

const listPartner = [
  { logo: Perfect, text: "Perfect Bath and Kitchen" },
  { logo: Caesar, text: "Caesar" },
  { logo: Abbott, text: "Abbott" },
  { logo: Blackmore, text: "Blackmores" },
  { logo: Sanofi, text: "Sanofi GEM" },
  { logo: Linax, text: "Abbeautyworld" },
];

const Partner = () => {
  const { t } = useTranslation("home");
  return (
    <Box className="py-16">
      <Box className="text-content-title font-bold text-black-1 text-center">
        {t("partner")}
      </Box>
      <Box className="flex flex-wrap items-center justify-around mt-5">
        {listPartner.map((item, index) => (
          <Box
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Box className="w-[200px] h-[124px] flex justify-center items-center">
              <img src={item.logo} alt="" />
            </Box>
            <Box className="text-content-14">{item.text}</Box>
          </Box>
        ))}
      </Box>
      <Box className="text-content-title font-bold text-black-1 text-center mt-20">
        {t("customer_experience")}
      </Box>
      <Box className="flex flex-wrap items-center justify-around mt-5">
        {listPartner.map((item, index) => (
          <Box
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Box className="w-[200px] h-[124px] flex justify-center items-center">
              <img src={item.logo} alt="" />
            </Box>
            <Box className="text-content-14">{item.text}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partner;
