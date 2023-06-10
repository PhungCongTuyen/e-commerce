import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Divider, styled } from "@mui/material";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export enum TitleWithRouteType {
  BACKGROUND_TITLE = 1,
  BACKGROUND_BUTTON = 2,
  TRANSPARENT_BACKGROUND = 3,
  FLASH_SALE = 4,
}

type Props = {
  title?: string | null | ReactElement;
  buttonText?: string | null;
  href?: string;
  type?: TitleWithRouteType;
  isNoButton?: boolean;
  timer?: number;
};

const StyledButton = styled(Button)({});

type CountdownType = {
  hour: number | string;
  min: number | string;
  second: number | string;
};

const TitleWithRoute: React.FC<Props> = ({
  title = "",
  buttonText,
  href,
  type,
  isNoButton,
  timer = 0,
}) => {
  const initState: CountdownType = React.useMemo(() => {
    return {
      hour: "00",
      min: "00",
      second: "00",
    };
  }, []);

  const [state, setState] = React.useState<CountdownType>(initState);
  const [time, setTime] = React.useState<number>(timer);

  const calculatorTimer = React.useCallback(
    (timer: number) => {
      if (!timer) {
        return initState;
      }
      setTime(timer);
      const currentTime: CountdownType = {
        hour:
          new Date(timer).getHours() < 10
            ? "0" + new Date(timer).getHours()
            : new Date(timer).getHours(),
        min:
          new Date(timer).getMinutes() < 10
            ? "0" + new Date(timer).getMinutes()
            : new Date(timer).getMinutes(),
        second:
          new Date(timer).getSeconds() < 10
            ? "0" + new Date(timer).getSeconds()
            : new Date(timer).getSeconds(),
      };
      setState(currentTime);
    },
    [initState]
  );

  const countDown = React.useCallback(
    (timer: number) => {
      const currentTime = timer - 1000;
      calculatorTimer(currentTime);
    },
    [calculatorTimer]
  );

  React.useEffect(() => {
    if (type !== TitleWithRouteType.FLASH_SALE) return;
    if (!time) return;
    const currentTime = new Date(time).getTime();
    const interval = setInterval(() => countDown(currentTime), 1000);
    return () => clearInterval(interval);
  }, [countDown, time, type]);

  switch (type) {
    case TitleWithRouteType.BACKGROUND_TITLE:
      return (
        <Box>
          <Box className="flex justify-between items-center">
            <Box className="text-white text-content-title font-bold bg-brand-1 px-6 py-2 rounded-tr-xl rounded-br-xl">
              {title}
            </Box>
            <Link to={href ? href : "/"} className={isNoButton ? "hidden" : ""}>
              <StyledButton
                className="font-semibold !text-brand-1 !text-content-12 !bg-transparent !normal-case"
                endIcon={<KeyboardArrowRight />}
              >
                {buttonText}
              </StyledButton>
            </Link>
          </Box>
          <Divider className="!mt-3 !mb-6" />
        </Box>
      );
    case TitleWithRouteType.BACKGROUND_BUTTON:
      return (
        <Box>
          <Box className="flex justify-between items-center">
            <Box className="text-brand-1 text-content-title font-bold">
              {title}
            </Box>
            <Link to={href ? href : "/"} className={isNoButton ? "hidden" : ""}>
              <Button
                className="font-semibold !text-white !text-content-12 !bg-brand-2 !rounded-xl !normal-case"
                sx={{ width: "188px", height: "48px" }}
                endIcon={<KeyboardArrowRight />}
              >
                {buttonText}
              </Button>
            </Link>
          </Box>
          <Divider className="!mt-3 !mb-6" />
        </Box>
      );
    case TitleWithRouteType.TRANSPARENT_BACKGROUND:
      return (
        <Box>
          <Box className="flex justify-between items-center">
            <Box className="!text-brand-1 text-content-title font-bold py-2">
              {title}
            </Box>
            <Link to={href ? href : "/"} className={isNoButton ? "hidden" : ""}>
              <StyledButton
                className="font-semibold !text-brand-1 !text-content-12 !bg-transparent !normal-case"
                endIcon={<KeyboardArrowRight />}
              >
                {buttonText}
              </StyledButton>
            </Link>
          </Box>
          <Divider className="!mt-3 !mb-6" />
        </Box>
      );
    case TitleWithRouteType.FLASH_SALE:
      return (
        <Box>
          <Box className="flex justify-between items-center">
            <Box className="flex gap-3 items-center">
              <Box className="text-brand-1 text-content-title font-bold py-2">
                {title}
              </Box>
              <Box className="flex text-brand-1 text-content-title font-bold h-[40px] leading-[40px] gap-1 text-center">
                <Box className="text-white bg-brand-1 px-2 rounded-3xl min-w-[50px]">
                  {state.hour}
                </Box>
                <Box>:</Box>
                <Box className="text-white bg-brand-1 px-2 rounded-3xl min-w-[50px]">
                  {state.min}
                </Box>
                <Box>:</Box>
                <Box className="text-white bg-brand-1 px-2 rounded-3xl min-w-[50px]">
                  {state.second}
                </Box>
              </Box>
            </Box>
            <Link to={href ? href : "/"} className={isNoButton ? "hidden" : ""}>
              <StyledButton
                className="font-semibold !text-brand-1 !text-content-12 !bg-transparent !normal-case"
                endIcon={<KeyboardArrowRight />}
              >
                {buttonText}
              </StyledButton>
            </Link>
          </Box>
          <Divider className="!mt-3 !mb-6" />
        </Box>
      );
    default:
      return (
        <Box>
          <Box className="flex justify-between items-center">
            {title}
            <Link to={href ? href : "/"} className={isNoButton ? "hidden" : ""}>
              <StyledButton
                className="font-semibold !text-brand-1 !text-content-12 !bg-transparent !normal-case"
                endIcon={<KeyboardArrowRight />}
              >
                {buttonText}
              </StyledButton>
            </Link>
          </Box>
          <Divider className="!mt-3 !mb-6" />
        </Box>
      );
  }
};

export default TitleWithRoute;
