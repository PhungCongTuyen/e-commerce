import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import TitleWithRoute, {
  TitleWithRouteType,
} from "../../../components/TitleWithRoute";
import HaNoi from "../../../assets/images/hanoi.jpg";

type ButtonPlaceProps = {
  srcImage?: string;
  name?: string;
  href?: string;
};

const ButtonPlace: React.FC<ButtonPlaceProps> = ({ srcImage, name, href }) => {
  return (
    <Button
      component="a"
      className="relative !w-[144px] !h-[144px] !p-0 !normal-case"
      href={href}
      draggable="false"
    >
      <Box
        component={"img"}
        src={srcImage}
        alt=""
        className="w-[144px] h-[144px] rounded-full object-cover pointer-events-none"
      />
      <Box className="absolute bottom-0 bg-white w-full text-center border-t-2 text-black font-semibold border-black-1">
        {name}
      </Box>
    </Button>
  );
};

const DiscoveryNearby = () => {
  const { t } = useTranslation("home");

  const listPlace = [
    {
      image: HaNoi,
      href: "/",
      name: "Hà Nội",
    },
    {
      image: HaNoi,
      href: "/",
      name: "Hà Nội",
    },
    {
      image: HaNoi,
      href: "/",
      name: "Hà Nội",
    },
    {
      image: HaNoi,
      href: "/",
      name: "Hà Nội",
    },
    {
      image: HaNoi,
      href: "/",
      name: "Hà Nội",
    },
    {
      image: HaNoi,
      href: "/",
      name: "Hà Nội",
    },
  ];

  return (
    <Box className="mt-4">
      <TitleWithRoute
        buttonText={t("go_discover_now")}
        href="/"
        title={t("discovery_title")}
        type={TitleWithRouteType.BACKGROUND_BUTTON}
      />
      <Box className="flex flex-wrap justify-around mb-6">
        {listPlace.map((item, index) => (
          <ButtonPlace
            name={item.name}
            srcImage={item.image}
            href={item.href}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DiscoveryNearby;
