import React from "react";
import TitleWithRoute, {
  TitleWithRouteType,
} from "../../../components/TitleWithRoute";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardCarousel, { CarouselType } from "../../../components/CardCarousel";
import { Pagination } from "swiper";

const HouseTypes = () => {
  const { t } = useTranslation("home");
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Box className="mt-4">
      <TitleWithRoute
        buttonText={t("go_discover_now")}
        href="/"
        title={t("discovery_house_type_title")}
        type={TitleWithRouteType.BACKGROUND_BUTTON}
      />
      <Box className="text-content-16 text-icon text-center">
        {t("discovery_house_type_description")}
      </Box>
      <Box className="mt-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={18}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
        >
          {array.map((item, index) => (
            <SwiperSlide
              className="!h-[350px]"
              key={index}
              onClick={() => console.log("routing")}
            >
              <CardCarousel
                type={CarouselType.HOUSE}
                title="Biệt thự bể bơi"
                starCount={5}
                description="Biệt thự sang trọng, diện tích lớn, hiện đại, có bể bơi ...."
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HouseTypes;
