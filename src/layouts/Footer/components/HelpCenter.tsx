import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavItem } from "./AboutUs";

const HelpCenter = () => {
  const { t } = useTranslation("footer");

  const listNav = [
    { text: t("faq"), href: "/" },
    { text: t("tutorial"), href: "/" },
    { text: t("payment"), href: "/" },
    { text: t("shipping"), href: "/" },
    { text: t("return_policy"), href: "/" },
    { text: t("cskh"), href: "/" },
    { text: t("new_blog"), href: "/" },
  ];

  return (
    <Box>
      <Box className="text-content-16 text-black-1 font-semibold">
        {t("help_center")}
      </Box>
      <Box className="text-content-12 mt-4 mb-3">
        <Box component={"div"}>
          {t("hotline")}
          <Box component={"span"} className=" text-black-1 font-bold">
            {t("hotline_phone")}
          </Box>
        </Box>
        <Box>{t("money_per_min")}</Box>
      </Box>
      <Box>
        {listNav.map((item, index) => (
          <NavItem href={item.href} text={item.text} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default HelpCenter;
