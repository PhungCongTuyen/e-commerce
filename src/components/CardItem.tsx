import { Box, ButtonBase, styled } from "@mui/material";
import React from "react";
import DefaultRoomImage from "../assets/images/DefaultRoomImage.png";
import {
  FavoriteBorder,
  BedOutlined,
  ShowerOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type Props = {
  type?: string;
  name?: string;
  price?: number | string;
  discount?: string;
  isPropose?: boolean;
  bedCount?: number;
  bathCount?: number;
  updatedTime?: number;
  isLiked?: boolean;
  onClickLiked?: () => void;
  onClick?: () => void;
};

const CustomCard = styled(ButtonBase)({});

const CardItem: React.FC<Props> = ({
  type,
  name,
  price,
  bedCount,
  bathCount,
  isPropose,
  updatedTime,
  isLiked,
  discount,
  onClickLiked,
  onClick,
}) => {
  const { t } = useTranslation("home");
  return (
    <CustomCard
      className="min-w-[248px] w-[248px] h-[437px] !rounded-xl !p-3 cursor-pointer !block !text-left relative !bg-white"
      sx={{ boxShadow: "0px 0px 12px rgba(15, 61, 145, 0.12)" }}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {discount && (
        <Box
          className="
            absolute 
            top-0 
            right-0 
            h-14 
            bg-access-red 
            z-10 
            leading-[56px] 
            rounded-tr-xl 
            rounded-bl-xl 
            text-content-14
            text-white 
            font-bold 
            px-3
            min-w-[56px] 
            text-center
          "
        >
          {discount}
        </Box>
      )}
      {isPropose && (
        <Box
          className="
            absolute 
            top-0 
            right-0 
            h-14 
            bg-access-green 
            z-10 
            leading-[56px] 
            rounded-tr-xl 
            rounded-bl-xl 
            text-content-14 
            text-white 
            font-bold 
            px-3
          "
        >
          {t("propose")}
        </Box>
      )}
      <Box component={"div"} className="relative">
        <Box
          component={"img"}
          src={DefaultRoomImage}
          className="rounded-2xl w-[225px] h-[225px] pointer-events-none"
        />
        <Box
          component={"a"}
          onClick={(event) => {
            event.stopPropagation();
            onClickLiked?.();
          }}
          className="!absolute bottom-2 right-2 !bg-[#FFFFFF60] !p-1 rounded-full"
        >
          <FavoriteBorder
            className={isLiked ? "text-brand-1" : "text-black-1"}
          />
        </Box>
      </Box>
      <Box className="text-brand-1 text-content-12 mt-3">
        {type || "Căn hộ"}
      </Box>
      <Box className="text-black-1 text-content-14 mt-1">
        {name || "Cho thuê chung cư Hoàng Huy Gran Tower - CH22"}
      </Box>
      <Box className="text-brand-1 mt-2">
        <Box
          component="span"
          className="text-content-18 font-bold text-content-title"
        >
          {price || "43.320đ"}
        </Box>
        <Box component="span" className="text-content-14">
          / tháng
        </Box>
      </Box>
      <Box className="flex gap-6 mt-3">
        <Box className="flex gap-2 justify-center items-center">
          <Box component="span" className="text-content-12">
            {bathCount || 2}
          </Box>
          <Box className="bg-[#F0F2F5] rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <ShowerOutlined className="text-icon" />
          </Box>
        </Box>
        <Box className="flex gap-2 justify-center items-center">
          <Box component="span" className="text-content-12">
            {bedCount || 2}
          </Box>
          <Box className="bg-[#F0F2F5] rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <BedOutlined className="text-icon" />
          </Box>
        </Box>
      </Box>
      <Box className="text-content-10 text-icon mt-3">2 ngày trước</Box>
    </CustomCard>
  );
};

export default CardItem;
