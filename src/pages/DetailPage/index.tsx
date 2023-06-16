import React from "react";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import { Box } from "@mui/material";
import ImageSlider from "./components/ImageSlider";
import ProductInformation, { Info } from "./components/ProductInformation";
import SimilarProducts from "./components/SimilarProducts";
import ViewProducts from "./components/ViewProducts";
import PostInformation, { InfoType } from "./components/PostInformation";
import DetailInformation, { DetailType } from "./components/DetailInformation";

const DetailPage = () => {
  const listInfo: Info[] = [
    {
      label: "Loại hình:",
      value: "Căn hộ",
    },
    {
      label: "Tổng số tầng:",
      value: "1 tầng",
    },
    {
      label: "Phòng ngủ:",
      value: "3 phòng ngủ",
    },
    {
      label: "Khu vực:",
      value: "Sở Dầu, quận Hồng Bàng, TP. Hải Phòng",
    },
  ];
  return (
    <Box>
      <CustomBreadcrumbs />
      <Box className="max-w-[1440px] mx-auto px-14 py-8 flex flex-wrap gap-6">
        <ImageSlider />
        <ProductInformation
          title="Căn hộ 3PN tại dự án BRG Legend Hải Phòng"
          projectName="Hilton Hải Phòng"
          price="1.820.000.000đ"
          spread="92.64"
          pricePerSpread="1.968.000"
          isPopover
          popoverContent="Có gì đó bất thường ở đây"
          listInfo={listInfo}
          phoneNumber="0912345678"
          code={37341637}
        />
        <PostInformation type={InfoType.BDS_FOR_RENT} />
      </Box>
      <Box className="bg-background-2">
        <Box className="flex flex-col py-4 gap-4 desktop:max-w-[1440px] mx-auto justify-center desktop:flex-row">
          <Box className="desktop:max-w-[994px] w-full gap-4 flex flex-col">
            <DetailInformation type={DetailType.HOUSE} />
            <ViewProducts />
          </Box>
          <Box>
            <SimilarProducts />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailPage;
