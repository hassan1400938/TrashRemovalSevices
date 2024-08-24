import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useTheme } from "@emotion/react";
import MenuDrawer from "./MenuDrawer";
import { Button, Stack } from "@mui/material";

function ResponsiveAppBar() {
  const theme = useTheme();
  const pages = ["Products", "Pricing", "Blog"];

  return (
    <AppBar position="static" sx={{ bgcolor: "white", py: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <a href="/">
          <img
            alt={theme.site.name}
            src={`/${theme.site.logo}`}
            width="280px"
            sx={{ flexGrow: 1 }}
            />
            </a>
          {/* Menu */}
          <Box sx={{ display: "flex", ml: "auto", gap:5}}>
            {/* <Stack direction="row" spacing={2} mr={3}>
              <Button>Login</Button>
              <Button variant="contained">Book Now</Button>
            </Stack> */}
            <Button href="/booking" variant="contained" sx={{padding:"0px 50px"}}> Book Now</Button>
            <MenuDrawer />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
