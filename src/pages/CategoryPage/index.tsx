import { Box } from "@mui/material";
import React from "react";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import CardItem from "../../components/CardItem";
import Filter from "../../components/Filter";

const CategoryPage = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box>
      <Filter />
      <CustomBreadcrumbs />
      <Box className="flex flex-wrap max-w-[1440px] mx-auto px-14 gap-5 pt-14 pb-[136px]">
        {array.map((item, index) => (
          <CardItem key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryPage;
