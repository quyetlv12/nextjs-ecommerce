import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Avatar, Badge, IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { KEY_PRODUCTS } from "../../configs";
import { ProductsProps } from "../../interfaces/products";
import { IndexProps } from "../../interfaces/utility";


type Anchor = "right";

export default function ShoppingCart() {
  const [key, setKey] = React.useState(undefined)
  const [state, setState] = React.useState({
    right: false,
  });
  let products:[] = []
  if (typeof window !== 'undefined') {
    products = JSON.parse(localStorage[KEY_PRODUCTS] || "[]")
  }
  

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
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {products.map((_elt:ProductsProps, index:IndexProps) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <Avatar src={_elt?.image} />
            </ListItemIcon>
            <ListItemText primary={_elt?.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={toggleDrawer("right", true)} sx={{ color: "#fff" }}>
        <Tooltip title="Giỏ hàng">
          <Badge badgeContent={4} color="error">
            <ShoppingBasketIcon />
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
