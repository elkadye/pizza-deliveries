import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Badge,
} from "@mui/material";


export default function SideBar() {
  return (
    <>
      <Typography p={3} variant="h3">
        Dashboard
      </Typography>

      <Grid container direction="column" className="darkBG sidebar" pl={6} pb={4}>
        <Grid Item container py={4}>
          <Grid item xs={8}>
            {/* <Badge badgeContent={4} color="primary"> */}
              <Typography variant="h5">Pending Orders</Typography>
            {/* </Badge> */}
          </Grid>
          <Grid item xs={4} color="primary">
            <Box sx={{ backgroundColor: "primary" }}>6</Box>
          </Grid>
        </Grid>
        <Grid Item>
          <Typography variant="h5">Completed Orders</Typography>
        </Grid>
      </Grid>
    </>
  );
}
