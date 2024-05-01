import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useTheme } from "@emotion/react";
import MenuDrawer from "./MenuDrawer";

function ResponsiveAppBar() {
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ bgcolor: "white", py: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <img
            alt={theme.site.name}
            src={`/TrashRemovalServices/${theme.site.logo}`}
            width="130px"
            sx={{ flexGrow: 1 }}
          />
          {/* Menu */}
          <Box sx={{ display: "flex", ml: "auto" }}>
            <MenuDrawer />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
