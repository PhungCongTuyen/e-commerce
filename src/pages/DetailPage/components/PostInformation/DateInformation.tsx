import {
  AccessTime,
  RunningWithErrors,
  WidgetsOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export enum NewsType {
  BDS_SELL = "bds_sell",
  BDS_RENT = "bds_rent",
}

type Props = {
  startDate?: string | number;
  endDate?: string | number;
  newsType?: NewsType;
};

const DateInformation: React.FC<Props> = ({ endDate, newsType, startDate }) => {
  const { t } = useTranslation("detail");

  const listData = React.useMemo(
    () => [
      { icon: <AccessTime />, label: t("start_date"), value: startDate },
      { icon: <RunningWithErrors />, label: t("end_date"), value: endDate },
      {
        icon: <WidgetsOutlined />,
        label: t("news_type"),
        value: t(newsType || ""),
      },
    ],
    [endDate, newsType, startDate, t]
  );
  return (
    <Box>
      <Box className="text-content-14 font-bold text-brand-1 mb-2">
        {t("post_information")}
      </Box>
      <Box className="flex flex-col gap-1">
        {listData.map((item, index) => (
          <Box key={index} className="flex justify-between">
            <Box className="flex items-center gap-2">
              <Box className="!text-brand-1">{item.icon}</Box>
              <Box className="text-content-14 text-grey-2">{item.label}</Box>
            </Box>
            <Box className="text-[15px] text-black-1 font-[500]">
              {item.value}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DateInformation;
