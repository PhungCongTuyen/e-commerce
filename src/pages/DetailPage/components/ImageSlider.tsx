import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselBackground from "../../../assets/images/CardCarousel.png";
import A from "../../../assets/images/Abbott.png";
import B from "../../../assets/images/Blackmore.png";
import C from "../../../assets/images/Caesar.png";
import { Box } from "@mui/material";

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const sliderRef = React.useRef<any>(null);
  const sliderSmallRef = React.useRef<any>(null);
  const listImage = [
    CarouselBackground,
    A,
    CarouselBackground,
    B,
    CarouselBackground,
    C,
  ];

  const handleChangeBigSlider = (index: number) => {
    setCurrentIndex(index);
  };

  const handleClickSlide = (index: number) => {
    setActiveSlide(index);
  };

  React.useEffect(() => {
    if (activeSlide !== undefined) {
      if (sliderRef.current) sliderRef.current.swiper.slideTo(activeSlide);
    }
  }, [activeSlide]);

  React.useEffect(() => {
    if (currentIndex !== undefined) {
      const page = Math.floor(currentIndex / 5);
      setActiveSlide(currentIndex);
      if (sliderSmallRef.current) sliderSmallRef.current.swiper.slideTo(page);
    }
  }, [currentIndex]);

  return (
    <Box className="w-[440px]">
      <Box
        className="w-full h-[424px] rounded-xl p-3"
        sx={{ border: "1px solid #DADADA" }}
      >
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(e) => handleChangeBigSlider(e.activeIndex)}
          pagination={{
            clickable: true,
          }}
          ref={sliderRef}
        >
          {listImage.map((item, index) => (
            <SwiperSlide className="!h-[400px]" key={index}>
              <Box
                className="w-[400px] h-[400px] rounded-xl"
                sx={{
                  backgroundImage: `url(${item})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box className="mt-3">
        <Swiper spaceBetween={10} slidesPerView={5} ref={sliderSmallRef}>
          {listImage.map((item, index) => (
            <SwiperSlide
              className="!h-[120px]"
              key={index}
              onClick={() => handleClickSlide(index)}
            >
              <Box
                className="w-[80px] h-[80px] rounded-xl border cursor-pointer"
                sx={{
                  border: activeSlide === index ? "3px solid #DF3E23" : "",
                  backgroundImage: `url(${item})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ImageSlider;
