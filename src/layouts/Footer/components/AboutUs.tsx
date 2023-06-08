import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ConfirmImage from "../../../assets/images/confirm-image.png";

export const NavItem = ({ href, text }: { href: string; text?: string }) => {
  return (
    <Box component={"div"} className="text-content-12 mb-3 hover:text-white">
      <a href={href}>{text}</a>
    </Box>
  );
};

const AboutUs = () => {
  const { t } = useTranslation("footer");
  const listNav = [
    { text: t("introduce-cyber"), href: "/" },
    { text: t("complaint-handling-policy"), href: "/" },
    { text: t("payment-privacy-policy"), href: "/" },
    { text: t("privacy-policy"), href: "/" },
    { text: t("recruitment"), href: "/" },
    { text: t("contact"), href: "/" },
  ];

  return (
    <Box>
      <Box className="text-content-16 text-black-1 font-semibold">
        {t("about-us")}
      </Box>
      <Box className="mt-4">
        {listNav.map((item, index) => (
          <NavItem href={item.href} text={item.text} key={index} />
        ))}
      </Box>
      <img src={ConfirmImage} alt="" />
    </Box>
  );
};

export default AboutUs;
