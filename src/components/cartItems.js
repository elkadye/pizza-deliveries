import * as React from "react";
import { Grid, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetCartItems } from "../actions/cart.actions.js";
import CartItemsCard from "./cart.item.card";




export default function CartItems() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => dispatch(GetCartItems()), []);

  console.log(cartItems);
  const price = cartItems[0];
  console.log(price);

  return (
    <>
      <Grid container direction="column" className="checkoutitems">
        <Grid item container spacing={2}>
          {cartItems.map((item) => (
            <Grid
              item
              container
              key={item.id}
              pb={3}
            >
              <CartItemsCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} px={4}>
          <div className="checkoutTotal">
            <Typography variant="h5" component="p">
              Subtotal: <span className="subtotal">700</span>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
