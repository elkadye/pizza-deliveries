import * as React from "react";
import { Grid, Box, Typography, Button, Badge,List,ListItem,ListItemButton,ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function SideBar({ orders, OrdersStatusToDisplay }) {
  const sidebarLinks = {
    text: "Pending Orders",
    path: "",
  };
  return (
    <>
      <Typography p={3} variant="h3">
        Dashboard
      </Typography>
      <Grid>
        <List>
          <Grid container alignItems="center">
            <Grid item>
              <ListItem>
                <ListItemButton onClick={() => OrdersStatusToDisplay(false)}>
                  <ListItemText primary="Pending Orders" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid item color="primary">
              <Typography>
                {orders.filter((item) => item.completed == false).length}
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <ListItem>
                <ListItemButton onClick={() => OrdersStatusToDisplay(true)}>
                  <ListItemText primary="Completed Orders" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid item color="primary">
              <Typography>
                {orders.filter((item) => item.completed == true).length}
              </Typography>
            </Grid>
          </Grid>
        </List>
      </Grid>
    </>
  );
}

  //  <Grid container direction="column" className="darkBG sidebar" pl={4} pb={4}>
  //    <Grid Item container py={2}>
  //      <Grid item xs={10}>
  //        <Button variant="text" onClick={() => OrdersStatusToDisplay(false)}>
  //          Pending Orders
  //        </Button>
  //      </Grid>
  //      <Grid item xs={2} color="primary">
  //        <Typography>
  //          {orders.filter((item) => item.completed == false).length}
  //        </Typography>
  //      </Grid>
  //    </Grid>
  //    <Grid Item container py={2}>
  //      <Grid item xs={10}>
  //        <Button variant="text" onClick={() => OrdersStatusToDisplay(true)}>
  //          Completed Orders
  //        </Button>
  //      </Grid>
  //      <Grid item xs={2} color="primary">
  //        <Typography>
  //          {orders.filter((item) => item.completed == true).length}
  //        </Typography>
  //      </Grid>
  //    </Grid>
  //  </Grid>;