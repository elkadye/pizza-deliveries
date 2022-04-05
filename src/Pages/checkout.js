import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../components/nav";
import OrderItems from "../components/orderItems";
import CheckoutForm from "../components/checkoutForm";


export default function Checkout() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <div className="darkBG">
            <Navbar />
          </div>
        </Grid>
        <Grid item container>
          <Grid item xs={0} md={2} />
          <Grid item xs={12} md={5}>
            <CheckoutForm />
          </Grid>
          <Grid item xs={12} md={3}>
            <OrderItems />
          </Grid>
          <Grid item xs={0} md={2} />
        </Grid>
      </Grid>
    </>
  );
}
