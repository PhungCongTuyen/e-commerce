import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import MasterCard from "../../../assets/images/mastercard.png";
import Visa from "../../../assets/images/visa.png";
import JCB from "../../../assets/images/jcb.png";
import Facebook from "../../../assets/images/Facebook.png";
import Zalo from "../../../assets/images/zalo.png";
import Youtube from "../../../assets/images/youtube.png";
import Tiktok from "../../../assets/images/TikTok.png";
import Instagram from "../../../assets/images/instagram.png";

const listPayment = [MasterCard, JCB, Visa];
const listSocial = [
  { image: Facebook, href: "/" },
  { image: Zalo, href: "/" },
  { image: Youtube, href: "/" },
  { image: Tiktok, href: "/" },
  { image: Instagram, href: "/" },
];

const Payment = () => {
  const { t } = useTranslation("footer");
  return (
    <Box>
      <Box className="text-content-16 text-black-1 font-semibold">
        {t("payment")}
      </Box>
      <Box className="flex flex-wrap mt-4">
        {listPayment.map((item, index) => (
          <img key={index} src={item} alt="" />
        ))}
      </Box>
      <Box className="text-content-16 text-black-1 font-semibold mt-[26px]">
        {t("contact-us")}
      </Box>
      <Box className="flex flex-wrap mt-3 gap-1">
        {listSocial.map((item, index) => (
          <Box
            className="w-10 h-10 rounded-md"
            key={index}
            component={"a"}
            href={item.href}
            sx={{
              backgroundImage: `url(${item.image})`,
              objectFit: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "white",
            }}
          >
            {""}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Payment;
