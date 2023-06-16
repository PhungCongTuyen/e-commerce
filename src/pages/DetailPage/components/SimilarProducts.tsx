import { Box } from "@mui/material";
import React from "react";
import CardItem from "../../../components/CardItem";
import { useTranslation } from "react-i18next";

const SimilarProducts = () => {
  const { t } = useTranslation("detail");
  return (
    <Box className="bg-white rounded-xl p-8 desktop:max-w-[310px]">
      <Box className="text-content-18 font-bold text-brand-1 text-center mb-2">
        {t("similar_product")}
      </Box>
      <Box className="flex desktop:flex-col gap-2">
        <CardItem />
        <CardItem />
        <CardItem />
      </Box>
    </Box>
  );
};

export default SimilarProducts;
