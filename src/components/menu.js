import * as React from "react";
import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ButtonRow from "./catagoriesMenu.js";
import MenuProductCard from "./menu.product.card";

import { GetProducts } from "../actions/products.actions.js";
import {ADD_CART_ITEMS} from "../actions/cart.actions"



export default function Menu() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => dispatch(GetProducts()), []);
  useEffect(() => dispatch(ADD_CART_ITEMS(products)), [products]);
  

  console.log(products);
  console.log(cartItems)
  return (
    <>
      {/* <Link to="/checkout" underline="hover">
        {'underline="hover"'}
      </Link> */}
      <Grid container alignItems="center" mt={5}>
        <Grid item xs={0} md={2} border={8} borderColor="success" />
        <Grid container xs={12} md={8} spacing={5} direction="column">
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <ButtonRow />
          </Grid>
          <Grid item container spacing={2}>
            {products.map((product) => (
              <Grid
                item
                container
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                pb={3}
              >
                <MenuProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={0} md={2} />
      </Grid>
    </>
  );
}
