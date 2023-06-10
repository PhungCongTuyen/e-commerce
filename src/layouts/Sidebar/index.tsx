import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  PersonOutlineOutlined,
  HomeOutlined,
  FavoriteBorderOutlined,
  RoomOutlined,
  BookOutlined,
  WorkOutlineOutlined,
  HeadsetOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ListSidebar = () => {
  const { t } = useTranslation("navbar");
  const listTask = [
    {
      icon: <HomeOutlined className="text-icon" />,
      text: t("home"),
      href: "/",
    },
    {
      icon: <FavoriteBorderOutlined className="text-icon" />,
      text: t("favorite"),
      href: "/",
    },
    {
      icon: <RoomOutlined className="text-icon" />,
      text: t("trip_note"),
      href: "/",
    },
    {
      icon: <BookOutlined className="text-icon" />,
      text: t("wiki_bds_full"),
      href: "/",
    },
    {
      icon: <WorkOutlineOutlined className="text-icon" />,
      text: t("recruitment"),
      href: "/",
    },
    {
      icon: <HeadsetOutlined className="text-icon" />,
      text: t("helper"),
      href: "/",
    },
    {
      icon: <PersonOutlineOutlined className="text-icon" />,
      text: t("become_colaborator"),
      href: "/",
    },
  ];

  const handleRedirect = (href: string) => {
    window.location.href = href;
  };

  return (
    <List className="!p-6">
      {listTask.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            className="!rounded-xl"
            sx={{ borderBottom: "1px solid #F8F8F8", height: "52px" }}
            onClick={() => handleRedirect(item.href)}
          >
            <ListItemIcon sx={{ minWidth: "24px" }} className="mr-3">
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              className="!text-content-14 text-black-1"
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer anchor={"left"} open={open} onClose={onClose}>
      <ListSidebar />
    </Drawer>
  );
};

export default Sidebar;
