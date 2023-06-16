import React from "react";
import { Box, ButtonBase, styled } from "@mui/material";
import CarouselBackground from "../assets/images/CardCarousel.png";
import { Star } from "@mui/icons-material";
export enum CarouselType {
  NEW = "NEW",
  HOUSE = "HOUSE",
}
type Props = {
  type?: CarouselType;
  description?: string;
  title?: string;
  starCount?: number;
  index?: number;
  srcImage?: string;
};

const StyledCardHouse = styled(ButtonBase)({});

const CardCarousel: React.FC<Props> = ({
  type,
  description,
  title,
  starCount,
  index,
  srcImage,
}) => {
  const handleIndex = () => {
    if (index === undefined || index < 0) return "00";
    const currentIndex = index + 1;
    return currentIndex < 10 ? "0" + currentIndex : currentIndex;
  };

  switch (type) {
    case CarouselType.HOUSE:
      return (
        <StyledCardHouse
          sx={{
            backgroundImage: `url(${CarouselBackground})`,
            backgroundSize: "cover",
          }}
          className="w-full h-[305px] relative cursor-pointer !rounded-xl"
        >
          <Box className="min-h-[112px] absolute bg-background-black-1 bottom-0 w-full rounded-b-xl text-left px-4 py-3 text-white">
            <Box className="flex gap-1 justify-between">
              <Box
                className="text-content-title text-ellipsis font-bold overflow-hidden w-full"
                component={"div"}
                title={title}
                sx={{
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  display: "-webkit-box",
                }}
              >
                {title}
              </Box>
              <Box className="flex gap-1 items-center text-content-14">
                {starCount}
                <Star className="!text-content-14" />
              </Box>
            </Box>
            <Box
              component={"div"}
              title={description}
              className="text-content-16 w-full"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
              }}
            >
              {description}
            </Box>
          </Box>
        </StyledCardHouse>
      );
    default:
      return (
        <StyledCardHouse className="w-full h-[305px] relative cursor-pointer !block">
          <Box
            component={"img"}
            src={srcImage || CarouselBackground}
            className="w-full h-[240px]"
          />
          <Box className="text-black-1 flex gap-4 mt-5">
            <Box className="text-[48px] font-bold leading-[48px]">
              {handleIndex()}
            </Box>
            <Box
              className="text-content-16 leading-[24px] font-bold text-left"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
              }}
              component={"div"}
              title={description || title}
            >
              {description || title}
            </Box>
          </Box>
        </StyledCardHouse>
      );
  }
};

export default CardCarousel;
