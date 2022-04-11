import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Badge,
} from "@mui/material";


export default function SideBar({orders}) {
  return (
    <>
      <Typography p={3} variant="h3">
        Dashboard
      </Typography>

      <Grid
        container
        direction="column"
        className="darkBG sidebar"
        pl={4}
        pb={4}
      >
        <Grid Item container py={2}>
          <Grid item xs={10}>
            <Typography variant="h5">Pending Orders </Typography>
          </Grid>
          <Grid item xs={2} color="primary">
            <Typography>
              {orders.filter((item) => item.completed == false).length}
            </Typography>
          </Grid>
        </Grid>
        <Grid Item container py={2}>
          <Grid item xs={10}>
            <Typography variant="h5">Completed Orders </Typography>
          </Grid>
          <Grid item xs={2} color="primary">
            <Typography>
              {orders.filter((item) => item.completed == true).length}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
