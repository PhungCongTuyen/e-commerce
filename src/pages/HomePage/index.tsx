import React from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("home");
  return <div>{t("discovery_title")}</div>;
};

export default HomePage;
