import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "../../../components/CardItem";
import "swiper/css";
import "swiper/css/pagination";

const ViewProducts = () => {
  const { t } = useTranslation("detail");
  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Box className="bg-white rounded-xl p-8">
      <Box className="text-content-18 font-bold text-brand-1 mb-2">
        {t("watched_products")}
      </Box>
      <Box className="mt-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
        >
          {array.map((item, index) => (
            <SwiperSlide className="!h-[500px]" key={index}>
              <Box className="p-2">
                <CardItem />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ViewProducts;
