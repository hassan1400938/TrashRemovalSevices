import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import MailIcon from "@mui/icons-material/Mail";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { useTheme } from "@emotion/react";

import { Link } from "react-router-dom";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, link: "/" },
  // { text: "About", icon: <InfoIcon />, link: "https://amphaul.com/about" },
  { text: "FAQs", icon: <HelpIcon />, link: "/" },
  {
    text: "Contact",
    icon: <MailIcon />,
    link: "/",
  },
  {
    text: "Booking",
    icon: <EventAvailableIcon />,
    link: "/booking",
  },
];

export default function MenuDrawer() {
  const theme = useTheme();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : { xs: 250, sm: 360, md: "75vh" },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {menuItems.map((item, index) => (
          <Link to={item.link} className="react-router-link">
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                  {item.icon}
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.primary.main }}>
                  <ListItemText primary={item.text} />
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer("right", true)}
          color={theme.palette.primary.main}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
