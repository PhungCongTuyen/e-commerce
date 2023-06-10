import React from "react";
import { Box } from "@mui/material";
import {
  NotificationsOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { ACTION_TYPE, useProfile, useProfileDispatch } from "../../context";
import useAuth from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import TopWidget from "./components/TopWidget";
import logoImage from "../../assets/images/logo.png";
import Sidebar from "../Sidebar";

const Navbar: React.FC = () => {
  const { t } = useTranslation("navbar");
  const [state, setState] = React.useState<boolean>(false);

  const profileContext = useProfile();

  const dispatch = useProfileDispatch();

  const { token, setToken } = useAuth();

  const handleSignin = () => {
    //call api sign in
    //response
    const resToken = "ádasdasdhbasdbasdbakjbdkj";
    const profile = {
      username: "Tuyền",
      phone_number: "032132132",
    };
    dispatch({ type: ACTION_TYPE.INIT, payload: profile });
    setToken({ token: resToken });
  };

  const handleToggle = () => {
    setState(true);
  };

  const listButton = [
    {
      icon: <NotificationsOutlined className="text-icon" />,
      text: (
        <Box className="!text-content-14 text-black-1">{t("notification")}</Box>
      ),
      href: "/",
    },
    {
      icon: <ShoppingCartOutlined className="text-icon" />,
      text: <Box className="!text-content-14 text-black-1">{t("cart")}</Box>,
      href: "/",
    },
    {
      icon: <PersonOutlineOutlined className="text-icon" />,
      text: (
        <Box className="!text-content-14 text-brand-1 font-bold">
          {t("sign_up")}
        </Box>
      ),
      onClick: () => handleSignin(),
    },
    {
      icon: <MenuOutlined className=" text-black-base" />,
      onClick: () => handleToggle(),
    },
  ];

  return (
    <Box>
      <TopWidget />
      <Box
        className="bg-white h-[72px] flex items-center justify-around"
        sx={{ filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.12))" }}
      >
        <a href="/">
          <img src={logoImage} alt="" />
        </a>
        <Box className="flex items-center gap-10">
          {listButton.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="flex items-center cursor-pointer gap-1"
              onClick={!!item?.onClick ? item.onClick : () => {}}
            >
              {item.icon}
              <Box>{item.text}</Box>
            </a>
          ))}
        </Box>
      </Box>
      <Sidebar open={state} onClose={() => setState(false)} />
    </Box>
  );
};

export default React.memo(Navbar, () => true);
