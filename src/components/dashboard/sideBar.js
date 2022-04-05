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
     
        <Typography pt={2} pb={3} variant="h3">Dashboard</Typography>
     
      <Grid container direction="column" pl={1}>
        <Grid Item container>
          <Grid item xs={8}>
            <Badge badgeContent={4} color="primary">
              <Button variant="outlined"> Pending Orders</Button>
            </Badge>
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
