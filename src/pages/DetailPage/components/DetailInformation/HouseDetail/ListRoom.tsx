import { Box, Divider } from "@mui/material";
import React from "react";
import listIcon from "../../../../../utils/constants/iconConstant";
import { useTranslation } from "react-i18next";

export type RoomDetail = {
  [key: string]: any;
};

type Props = {
  roomDetail?: RoomDetail;
};

type ListRoomDetail = {
  value: string;
  label: string;
  icon: React.ReactElement;
};

const ListRoom: React.FC<Props> = ({ roomDetail }) => {
  const { t } = useTranslation("detail");
  const listRoomDetail = React.useMemo(() => {
    if (roomDetail) {
      const keys = Object.keys(roomDetail);
      const array: ListRoomDetail[] = keys.map((k) => ({
        value: roomDetail?.[k],
        label: t(k),
        icon: listIcon[k],
      }));
      return array;
    }
  }, [roomDetail, t]);
  return (
    <div>
      <Box className="flex flex-wrap gap-4">
        {listRoomDetail?.map((item, index) => (
          <Box key={index}>
            <Box className="text-content-12">{item.label}</Box>
            <Box className="flex gap-1 items-center">
              <Box className="text-content-title font-bold">{item.value}</Box>
              <Box className="!text-icon !text-content-title">{item.icon}</Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Divider className="!my-2" />
    </div>
  );
};

export default ListRoom;
