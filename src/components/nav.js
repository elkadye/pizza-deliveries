import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Badge, Button } from "@mui/material";
import Image from "mui-image";
import { useDispatch, useSelector } from "react-redux";
import CartDialog from "./cartDialog";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cartItems);
   const dispatch = useDispatch();

 

  return (
    <>
      {/* <Grid container direction="column"> */}
      <Grid item container alignItems="center" pt={3}>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={10}>
          <Grid container spacing={3}>
            <Grid item container alignItems="center" xs={6} md={4}>
              <Grid item>
                <Typography variant="h2">OBSD</Typography>
              </Grid>
              <Grid item p={2}>
                <Link to="/" underline="hover">
                  <img src="/img/logo.png" alt="logo" />
                </Link>
              </Grid>
            </Grid>

            <Grid
              item
              container
              xs={6}
              md={8}
              spacing={3}
              justifyContent="end"
              alignItems="center"
            >
              <Grid item sx={{ display: { md: "block", xs: "none" } }}>
                <Typography variant="h6">Menu</Typography>
              </Grid>
              <Grid item sx={{ display: { md: "block", xs: "none" } }}>
                <Typography variant="h6">Most Popular</Typography>
              </Grid>
              <Grid item md={3}>
                <CartDialog />

                {/* <Badge badgeContent={badgeCount} color="primary"></Badge>
                  <Image
                    component="button"
                    width="30%"
                    height="30%"
                    src="/img/delivery.png"
                  /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </>
  );
};
export default NavBar;
