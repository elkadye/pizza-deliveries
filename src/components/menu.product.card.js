import * as React from "react";
import {
  Grid,
  Typography,
  TextField,
  Card,
  CardActions,
  IconButton,
} from "@mui/material";
import Image from "mui-image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import {changeOrderQty} from "../actions/products.actions"

export default function MenuProductCard({ product }) {
  console.log(product);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // function changeOrderQty(q) {
  //   dispatch(changeOrderQty(product.id, q));
  //   console.log(q);
  // }
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image src="/img/pizza_2.png" width="auto" height="auto" />
        </Grid>
        <Grid item xs={6} container direction="column">
          <Grid Item>
            <Typography variant="h6"> {product.Title}</Typography>
          </Grid>
          <Grid Item>
            <Typography>Shrimp, Squid, Pineapple</Typography>
          </Grid>
          <Grid Item>
            <Typography>Price: LE. 100.00</Typography>
          </Grid>
        </Grid>
      </Grid>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            justifyContent="flex-end"
            alignItems="center"
            xs={4}
          >
            <IconButton
              // onClick={() => changeOrderQty(1)}
              onClick={() => dispatch(changeOrderQty(product.id, 1))}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            alignItems="center"
          >
            {/* <TextField id="outlined-basic" variant="outlined" /> */}
            <Typography>{product.orderQty}</Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-start"
            alignItems="center"
            xs={4}
          >
            <IconButton
              onClick={() => dispatch(changeOrderQty(product.id, -1))}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
