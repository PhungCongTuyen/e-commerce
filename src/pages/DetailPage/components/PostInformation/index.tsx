import { Box, Divider } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import DateInformation, { NewsType } from "./DateInformation";
import Social from "../Social";
import BookingForm from "./BookingForm";
import HelperContact from "./HelperContact";

export enum InfoType {
  VEHICLE = "/xe-cho-thue",
  BDS_FOR_RENT = "/bds-cho-thue",
  BDS_FOR_SELL = "/bds-can-ban",
}

type Props = {
  type?: InfoType;
};

const PostInformation: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation("detail");

  switch (type) {
    case InfoType.VEHICLE:
      return <></>;
    case InfoType.BDS_FOR_RENT:
      return (
        <Box className="desktop:max-w-[356px] w-full flex flex-col desktop:ml-6">
          <DateInformation
            endDate={"23/08/2023"}
            startDate={"23/05/2023"}
            newsType={NewsType.BDS_RENT}
          />
          <BookingForm moneyPerMonth={"4.300.000"} percentPrePay={30} />
          <HelperContact />
        </Box>
      );
    default:
      return (
        <Box className="desktop:max-w-[356px] w-full">
          <DateInformation
            endDate={"23/08/2023"}
            startDate={"23/05/2023"}
            newsType={NewsType.BDS_SELL}
          />
          <Divider className="!my-6" />
          <Social />
        </Box>
      );
  }
};

export default PostInformation;
