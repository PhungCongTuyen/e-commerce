import React from "react";
import { Box } from "@mui/material";

const MainLayout = ({ children }: { children: React.ReactElement }) => {
  return <Box className="relative min-h-[500px]">{children}</Box>;
};

export default MainLayout;
