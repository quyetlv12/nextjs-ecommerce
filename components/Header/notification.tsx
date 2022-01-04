import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, IconButton, Tooltip, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";


type Anchor = "right";

export default function Notification() {
    const [availableNotification, setAvailableNotification] = React.useState([])
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        { availableNotification.length !== 0 ? availableNotification.map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )) :  <Typography textAlign="center">Không có thông báo</Typography>}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={toggleDrawer("right", true)} sx={{ color: "#fff" }}>
        <Tooltip title="Thông báo">
          <Badge badgeContent={6} color="error">
            <NotificationsIcon />
          </Badge>
        </Tooltip>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </Box>
  );
}
