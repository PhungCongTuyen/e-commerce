import {
  AttachMoneyOutlined,
  BadgeOutlined,
  CalendarTodayOutlined,
  PeopleOutlineOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  moneyPerMonth?: string;
  isAgreePrePay?: boolean;
  percentPrePay?: string | number;
};

const StyledButton = styled(ButtonBase)({
  border: "2px solid",
});

const options1 = [1, 2, 3];
const options2 = [1, 2, 3];

const BookingForm: React.FC<Props> = ({
  moneyPerMonth,
  isAgreePrePay = true,
  percentPrePay,
}) => {
  const { t } = useTranslation("detail");

  const totalPricePrePay = React.useMemo(() => {
    const price =
      (Number(moneyPerMonth?.split(".").join("")) * Number(percentPrePay)) /
      100;
    const stringPrice = price.toString().split("");
    for (let i = stringPrice.length; i > 0; i--) {
      if (i % 3 === 0) stringPrice.splice(i - 2, 0, ".");
    }
    return stringPrice;
  }, [moneyPerMonth, percentPrePay]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <Box className="mt-12">
      <Box className="text-content-12 text-black-1">
        {t("pre_money_for_month")}
      </Box>
      <Box className="text-brand-1 font-bold text-content-16">
        {moneyPerMonth || 0} {t("per_month")}
      </Box>
      {isAgreePrePay && (
        <Box className="text-content-12 font-bold">
          <AttachMoneyOutlined className="!text-access-green !text-content-16" />
          {t("agree_pre_pay")}
        </Box>
      )}
      <Box
        component={"form"}
        className="flex flex-col gap-2 mt-4"
        onSubmit={handleSubmit}
      >
        <Select
          defaultValue=""
          displayEmpty
          className="w-full !rounded-lg"
          sx={{
            "& .MuiInputBase-input": {
              padding: "4px",
            },
          }}
          name="time"
          renderValue={(value) => {
            if (value.length === 0) {
              return (
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <CalendarTodayOutlined className="!text-icon !text-content-16" />
                  <em className="text-content-14 text-grey-1">
                    {t("time_to_stay")}
                  </em>
                </Box>
              );
            }
            return (
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <CalendarTodayOutlined className="!text-icon !text-content-16" />
                {value}
              </Box>
            );
          }}
        >
          {options1.map((item, index) => (
            <MenuItem key={index}></MenuItem>
          ))}
        </Select>
        <Select
          defaultValue=""
          displayEmpty
          className="w-full !rounded-lg"
          sx={{
            "& .MuiInputBase-input": {
              padding: "4px",
            },
          }}
          name="country"
          renderValue={(value) => {
            if (value.length === 0) {
              return (
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <BadgeOutlined className="!text-icon !text-content-16" />
                  <em className="text-content-14 text-grey-1">
                    {t("country")}
                  </em>
                </Box>
              );
            }
            return (
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <BadgeOutlined className="!text-icon !text-content-16" />
                {value}
              </Box>
            );
          }}
        >
          {options2.map((item, index) => (
            <MenuItem key={index}></MenuItem>
          ))}
        </Select>
        <Box className="rounded-lg border-stroke border-[1px] p-1 flex items-center">
          <PeopleOutlineOutlined className="!text-icon !text-content-16 mr-2" />
          <input
            name="adult"
            className="outline-none w-8 mr-1"
            defaultValue={0}
            type="number"
          />
          <Box className="text-content-12">{t("adult")}</Box>
          <Divider orientation="vertical" flexItem className="!mx-2" />
          <input
            name="children"
            className="outline-none w-8 mr-1"
            type="number"
            defaultValue={0}
          />
          <Box className="text-content-12">{t("children")}</Box>
        </Box>
        <Box className="mt-4 border-t-2 pt-1">
          <Box className="text-content-12 font-bold">
            {t("prepay_per_month", { percent: percentPrePay || 0 })}
          </Box>
          <Box className="text-content-10 text-grey-1">{t("prepay_rule")}</Box>
          <Box className="text-content-10 text-grey-1">
            {totalPricePrePay || 0} đ
          </Box>
        </Box>
        <Button
          type="submit"
          className="h-8 !rounded-lg !text-white !normal-case !bg-brand-1 !font-[600] !text-content-12 !mb-3 !mt-4"
        >
          {t("send_request_book_room")}
        </Button>
        <StyledButton className="h-8 !rounded-lg !text-brand-1 !normal-case !border-brand-1 !font-[600] !text-content-12">
          {t("chat_with_owner")}
        </StyledButton>
      </Box>
    </Box>
  );
};

export default BookingForm;
