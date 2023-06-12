import { Box, Divider, Tab, Tabs } from "@mui/material";
import React from "react";
import FilterBackground from "../../assets/images/filterBackground.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  AttachMoneyOutlined,
  DirectionsCarOutlined,
  HomeOutlined,
  VillaOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import FilterForRent from "./FilterForRent";
import FilterForVehicle from "./FilterForVehicle";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#DF3E23",
            fontWeight: "bold",
          },
          color: "#ADB3BC",
          textTransform: "none",
          fontSize: "16px",
        },
      },
    },
  },
});

enum TabsType {
  RENT = 0,
  FOR_SALE = 1,
  PROJECT = 2,
  VEHICLE = 3,
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Filter = () => {
  const { t } = useTranslation("home");
  const [tab, setTabs] = React.useState<TabsType>(TabsType.RENT);

  const listTabsContent = [
    <FilterForRent />,
    <></>,
    <></>,
    <FilterForVehicle />,
  ];

  const listTabs = [
    {
      label: t("for_rent"),
      value: TabsType.RENT,
      icon: <HomeOutlined />,
    },
    {
      label: t("for_sale"),
      value: TabsType.FOR_SALE,
      icon: <AttachMoneyOutlined />,
    },
    {
      label: t("project"),
      value: TabsType.PROJECT,
      icon: <VillaOutlined />,
    },
    {
      label: t("vehicle_for_rent_drive_yourself"),
      value: TabsType.VEHICLE,
      icon: <DirectionsCarOutlined />,
    },
  ];

  const handleChange = (e: React.SyntheticEvent, value: number) => {
    setTabs(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="h-[600px] w-full flex items-center justify-center"
        sx={{
          backgroundImage: `url(${FilterBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box className="bg-white min-h-[170px] rounded-xl px-8 py-6 flex items-center flex-col min-w-[1248px]">
          <Tabs
            className="!min-h-0 !mx-auto"
            value={tab}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#DF3E23",
              },
            }}
          >
            {listTabs.map((item, index) => (
              <Tab
                className="!min-h-0 !px-0 !mx-5 !text-content-16"
                label={item.label}
                {...a11yProps(index)}
                key={index}
                icon={item.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>
          <Divider className="!mt-6 w-full" />
          <Box className="flex flex-wrap">
            {listTabsContent.map((item, index) => (
              <TabPanel index={index} value={tab} key={index}>
                {item}
              </TabPanel>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Filter;
