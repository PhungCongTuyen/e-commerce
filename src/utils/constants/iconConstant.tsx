import {
  AirOutlined,
  BathtubOutlined,
  ChairOutlined,
  CountertopsOutlined,
  DeckOutlined,
  GroupOutlined,
  LocalHotelOutlined,
  LocalParkingOutlined,
  PoolOutlined,
  SmokeFreeOutlined,
} from "@mui/icons-material";

type ListIcon = {
  [key: string]: any;
};

const listIcon: ListIcon = {
  livingroom: <ChairOutlined />,
  people: <GroupOutlined />,
  bedroom: <LocalHotelOutlined />,
  bathroom: <BathtubOutlined />,
  air_condition: <AirOutlined />,
  no_smoking: <SmokeFreeOutlined />,
  swimming_pool: <PoolOutlined />,
  parking: <LocalParkingOutlined />,
  kitchen: <CountertopsOutlined />,
  outside_kitchen: <DeckOutlined />,
};

export default listIcon;
