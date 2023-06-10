import { NavigateNextOutlined } from "@mui/icons-material";
import { Stack, Breadcrumbs, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useRouteMatch } from "react-router-dom";

const CustomBreadcrumbs = () => {
  const { t } = useTranslation("home");
  const { url, path } = useRouteMatch();

  const routesName = [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("vehicle_for_rent"),
      path: "/xe-cho-thue",
    },
    {
      name: t("vehicle_for_rent_detail"),
      path: "/xe-cho-thue/:id",
    },
    {
      name: t("bds_for_rent"),
      path: "/bds",
    },
    {
      name: t("bds_for_rent_detail"),
      path: "/bds/:id",
    },
  ];

  const routes = React.useMemo(() => {
    const originalPath = path.trim().split("/");
    const routesArray: string[] = [];
    for (const id in originalPath) {
      const currentItem = Number(id) > 1 ? routesArray[Number(id) - 1] : "";
      routesArray.push(currentItem + "/" + originalPath[id]);
    }
    return routesArray;
  }, [path]);

  return (
    <Box className="flex min-h-[67px] bg-background-1 items-center px-[60px]">
      <Breadcrumbs
        separator={<NavigateNextOutlined style={{ height: 20 }} />}
        aria-label="breadcrumb"
      >
        {routes.map((item, index) => (
          <Box key={index}>
            {index < routes.length - 1 ? (
              <Link
                key={index}
                to={`${item}`}
                className="text-content-14 text-brand-1 hover:bg-brand-1 hover:text-white px-2 rounded-lg"
              >
                {routesName?.find((x) => x.path === item)?.name}
              </Link>
            ) : (
              <Box className="text-content-14 text-brand-1 font-bold">
                {routesName?.find((x) => x.path === item)?.name}
              </Box>
            )}
          </Box>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default CustomBreadcrumbs;
