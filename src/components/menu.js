import * as React from "react";
import { Grid, Typography, Card, Button, TextField } from "@mui/material";
import Image from "mui-image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Products } from "../actions/products.actions.js";
import MenuProductCard from "./menu.product.card";

function MenuRow() {
  return (
    <React.Fragment>
      <Grid item container xs={12} sm={6} md={4} pb={3}></Grid>
      <Grid item container xs={12} sm={6} md={4} pb={3}>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Image src="/img/pizza_2.png" width="auto" height="auto" />
            </Grid>
            <Grid item xs={6} container direction="column">
              <Grid Item>
                <Typography variant="h5"> Title</Typography>
              </Grid>
              <Grid Item>
                <Typography variant="h6">Shrimp, Squid, Pineapple</Typography>
              </Grid>
              <Grid Item>
                <Typography>Price: LE. 100.00</Typography>
              </Grid>
              <Grid Item container direction="row" alignItems="center">
                <Grid item xs={3}>
                  +
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                  -
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item container xs={12} sm={6} md={4} pb={3}>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Image src="/img/pizza_2.png" width="auto" height="auto" />
            </Grid>
            <Grid item xs={6} container direction="column">
              <Grid Item>
                <Typography variant="h5"> Title</Typography>
              </Grid>
              <Grid Item>
                <Typography variant="h6">Shrimp, Squid, Pineapple</Typography>
              </Grid>
              <Grid Item>
                <Typography>Price: LE. 100.00</Typography>
              </Grid>
              <Grid Item container direction="row" alignItems="center">
                <Grid item xs={3}>
                  +
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                  -
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

function ButtonRow() {
  return (
    <React.Fragment>
      <Grid item>
        <Button
          variant="outlined"
          color="error"
          sx={{
            p: 2,
            m: 2,
            color: "black",
            // textTransform: "lowercase"
          }}
        >
          Popular
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="error"
          sx={{
            p: 2,
            m: 2,

            // textTransform: "lowercase"
          }}
        >
          Pizza
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="error"
          sx={{
            p: 2,
            m: 2,
            color: "black",
            // textTransform: "lowercase"
          }}
        >
          burger
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="error"
          sx={{
            p: 2,
            m: 2,
            color: "black",
            // textTransform: "lowercase"
          }}
        >
          crepe
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="error"
          sx={{
            p: 2,
            m: 2,
            color: "black",
            // textTransform: "lowercase"
          }}
        >
          drinks
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default function Menu() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => dispatch(Products()), []);

  console.log(products);
  return (
    <>
      <Grid container alignItems="center" mt={5}>
        <Grid item xs={0} md={2} border={8} borderColor="success" />
        <Grid container xs={12} md={8} spacing={5} direction="column">
          <Grid item container alignItems="center" justifyContent="center">
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

            {/* <MenuRow />
            <MenuRow />
            <MenuRow /> */}
          </Grid>
        </Grid>

        <Grid item xs={0} md={2} />
      </Grid>
    </>
  );
}
