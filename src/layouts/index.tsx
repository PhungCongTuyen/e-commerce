import React from "react";
import { Box, Button } from "@mui/material";

const MainLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Box className="relative min-h-[500px] max-w-[1440px] mx-auto px-14">
      {children}
    </Box>
  );
};

export default MainLayout;
