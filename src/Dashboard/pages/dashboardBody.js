import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Grid } from "@mui/material";

import SideBar from "../components/sideBar";
import Orders from "../components/orders";
import { getOrders } from "../../actions/order.actions";

export default function Home() {
const dispatch = useDispatch();
 useEffect(() => dispatch(getOrders()), []);

   const orders = useSelector((state) => state.orders);
   console.log(orders)
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <div div className="darkBG">
            <SideBar orders={orders} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Orders orders={orders} />
        </Grid>
      </Grid>
    </>
  );
}
