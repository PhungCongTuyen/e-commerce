import { Box } from "@mui/material";
import React from "react";
import HouseDetail from "./HouseDetail";
import VehicleDetail from "./VehicleDetail";

export enum DetailType {
  HOUSE = 1,
  VEHICLE = 2,
}

type Props = {
  type?: DetailType;
};

const roomDetail = {
  people: 20,
  livingroom: 1,
  bedroom: 3,
  bathroom: 3,
};

const prods = {
  air_condition: true,
  no_smoking: true,
  swimming_pool: true,
  parking: true,
  kitchen: false,
  outside_kitchen: true,
};

const DetailInformation: React.FC<Props> = ({ type }) => {
  switch (type) {
    case DetailType.HOUSE:
      return (
        <Box className="bg-white rounded-xl p-8">
          <HouseDetail
            houseName="An Garden Retreat Mars Homestay"
            address="xóm Bãi Dài, xã Tiến Xuân, huyện Thạch Thất, Hà Nội, Việt Nam"
            rating={5}
            roomDetail={roomDetail}
            properties={prods}
          />
        </Box>
      );
    case DetailType.VEHICLE:
      return (
        <Box className="bg-white rounded-xl p-8">
          <VehicleDetail />
        </Box>
      );
    default:
      return <></>;
  }
};

export default DetailInformation;
