import React from "react";
import { Box, Select, MenuItem } from "@mui/material";
import {
  SettingsOutlined,
  LocalShippingOutlined,
  WidgetsOutlined,
  CardGiftcardOutlined,
  LanguageOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import localStorageSerive from "../../../services/localStorageService";
import { useTranslation } from "react-i18next";
import { LangPropsEnum } from "../../../i18n";

const TopWidget = () => {
  const { t, i18n } = useTranslation("navbar");

  const handleChangeLanguage = (lang: LangPropsEnum) => {
    i18n.changeLanguage(lang);
  };

  const listButtonTopNav = [
    {
      icon: <SettingsOutlined className="!text-content-12" />,
      text: t("home"),
      href: "/",
    },
    {
      icon: <LocalShippingOutlined className="!text-content-12" />,
      text: t("colaboration"),
      href: "/",
    },
    {
      icon: <WidgetsOutlined className="!text-content-12" />,
      text: t("wiki_bds"),
      href: "/",
    },
    {
      icon: <CardGiftcardOutlined className="!text-content-12" />,
      text: t("send_request"),
      href: "/",
    },
  ];

  return (
    <Box className="h-[40px] bg-brand-1 flex items-center justify-around">
      <Box className="flex gap-10">
        {listButtonTopNav.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-content-12 text-white flex items-center gap-1"
          >
            {item.icon}
            <Box>{item.text}</Box>
          </a>
        ))}
      </Box>
      <Box className="flex items-center gap-1">
        <LanguageOutlined className="!text-content-12 text-white" />
        <Select
          variant="standard"
          disableUnderline
          IconComponent={KeyboardArrowDown}
          sx={{
            svg: { color: "white" },
          }}
          value={localStorageSerive.getLocalStorage("i18nextLng")}
          onChange={(event) =>
            handleChangeLanguage(event.target.value as LangPropsEnum)
          }
          className="!text-white !text-content-12 !leading-[unset]"
        >
          <MenuItem className="!text-content-12" value={LangPropsEnum.VIE}>
            Tiếng Việt
          </MenuItem>
          <MenuItem className="!text-content-12" value={LangPropsEnum.ENG}>
            English
          </MenuItem>
          <MenuItem className="!text-content-12" value={LangPropsEnum.CN}>
            Chinese
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default TopWidget;
