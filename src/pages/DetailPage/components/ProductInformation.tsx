import { PhoneInTalkOutlined, QuestionMark } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Popover,
  styled,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Social from "./Social";

export type Info = {
  label?: string;
  value?: string;
};

type Props = {
  title?: string;
  projectName?: string;
  price?: string | number;
  spread?: string | number;
  pricePerSpread?: string | number;
  isPopover?: boolean;
  popoverContent?: string;
  listInfo?: Info[];
  phoneNumber?: string;
  code?: number | string;
};

const StyledButton = styled(ButtonBase)({
  height: "48px",
  color: "#DF3E23",
  border: "1px solid #DF3E23",
  borderRadius: "12px",
  maxWidth: "220px",
  textAlign: "center",
  width: "100%",
  backgroundColor: "#F9D8D3",
  fontSize: "12px",
  fontWeight: "600",
});

const ProductInformation: React.FC<Props> = ({
  title,
  projectName,
  price,
  spread,
  pricePerSpread,
  isPopover,
  popoverContent,
  listInfo,
  phoneNumber,
  code,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [isHidden, setIsHidden] = React.useState<boolean>(true);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const hiddenPhone = () => {
    const orgPhone = phoneNumber?.trim().split("");
    for (let i = 0; i < 5; i++) {
      if (orgPhone) {
        orgPhone[i + 3] = "*";
      }
    }
    orgPhone?.splice(3, 0, " ");
    orgPhone?.splice(7, 0, " ");
    return orgPhone?.join("");
  };

  const matchPhone = (phone?: string) => {
    if (phone) {
      const cleaned = phone.replace(/\D/g, "");
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return match[1] + " " + match[2] + " " + match[3];
      }
    }
  };

  const open = Boolean(anchorEl);

  const { t } = useTranslation("detail");
  return (
    <Box className="max-w-[460px] w-full">
      <Box
        className="text-content-18 font-bold text-ellipsis overflow-hidden whitespace-nowrap mb-6"
        component={"div"}
        title={title}
      >
        {title}
      </Box>
      {projectName && (
        <Box className="text-content-14 mb-4">
          {t("project")}
          <Box component={"span"} className="text-brand-1">
            {projectName}
          </Box>
        </Box>
      )}
      <Box className="px-7 py-4 bg-[#F2F4F5] rounded-xl mb-6">
        <Box className="text-content-title text-black-1 font-bold">{price}</Box>
        <Box className="text-content-12 flex flex-wrap justify-between">
          {spread && (
            <Box>
              {t("spread")}:{" "}
              <Box component={"span"} className="font-bold text-brand-1">
                {spread} / m<sup>2</sup>
              </Box>
            </Box>
          )}
          {pricePerSpread && (
            <Box>
              {t("price_per_spread")}:{" "}
              <Box component={"span"} className="font-bold text-brand-1">
                {pricePerSpread} / m<sup>2</sup>
              </Box>
            </Box>
          )}
          {isPopover && (
            <>
              <Box
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className="bg-[#CBCDCE] w-4 h-4 rounded-full flex items-center justify-center hover:bg-icon cursor-pointer"
              >
                <QuestionMark className="text-white !text-content-12" />
              </Box>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box className="text-content-12 p-2">{popoverContent}</Box>
              </Popover>
            </>
          )}
        </Box>
      </Box>
      <Box className="flex flex-col gap-3 mb-6">
        {listInfo?.length &&
          listInfo?.map((item, index) => (
            <Box key={index} className="flex text-content-14 gap-5">
              <Box className="max-w-[130px] w-full">{item.label}</Box>
              <Box
                component={"div"}
                title={item.value}
                fontWeight={600}
                className="text-ellipsis overflow-hidden whitespace-nowrap"
              >
                {item.value}
              </Box>
            </Box>
          ))}
      </Box>
      <Box className="flex flex-wrap gap-4 justify-center mb-[80px]">
        <StyledButton>{t("request_for_contact")}</StyledButton>
        <Button
          startIcon={<PhoneInTalkOutlined />}
          className="!bg-brand-1 !text-white !text-content-12 h-12 !rounded-xl max-w-[220px] w-full !normal-case !font-bold"
          onClick={() => setIsHidden((prev) => !prev)}
        >
          <>
            {t("contact_to")}:{" "}
            {isHidden ? hiddenPhone() : matchPhone(phoneNumber)}
          </>
        </Button>
      </Box>
      <Divider />
      <Box className="flex flex-wrap justify-between mt-3">
        <Box className="text-content-14 text-grey-2">
          {t("code_news")} {code}
        </Box>
        <Social />
      </Box>
    </Box>
  );
};

export default ProductInformation;
