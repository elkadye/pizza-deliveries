import React from "react";
import { Grid, Typography, Badge } from "@mui/material";
import Image from "mui-image";


const NavBar = () => {
  return (
    <>
      {/* <Grid container direction="column"> */}
      <Grid item container alignItems="center" pt={3}>
        <Grid item xs={0} md={2}/>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item container alignItems="center" xs={4} md={4}>
              <Grid item>
                <Typography variant="h2">OBSD</Typography>
              </Grid>
              <Grid item p={2}>
                <img src="/img/logo.png" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={8}
              md={8}
              spacing={3}
              justifyContent="end"
              alignItems="center"
            >
              <Grid item>
                
                <Typography variant="h6">Menu</Typography>
              </Grid>
              <Grid item>
               
                <Typography variant="h6">Most Popular</Typography>
              </Grid>
              <Grid item md={3}>
                <Badge badgeContent={4} color="primary"></Badge>
                <Image width="30%" height="30%" src="/img/delivery.png" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={2}/>
      </Grid>
    </>
  );
};
export default NavBar;
