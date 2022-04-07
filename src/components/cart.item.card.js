import * as React from "react";
import Image from "mui-image";
import {
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";

import { changeCartQty, deleteCartItem } from "../actions/cart.actions.js";

export default function CartItemsCard({ item }) {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <Grid container spacing={2} pb={1}>
      <Grid item xs={6}>
        <Image src="/img/pizza_2.png" width="auto" height="auto" />
      </Grid>
      <Grid item xs={6} container direction="column">
        <Grid Item>
          <Typography variant="h5"> {item.Title}</Typography>
        </Grid>

        <Grid Item container direction="row" alignItems="center">
          <Grid item>
            <Typography>Qty: {item.orderQty}</Typography>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => dispatch(changeCartQty(item.id, 1))}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => dispatch(changeCartQty(item.id, -1))}
              color="primary"
              aria-label="upload picture"
              component="span"
              disabled={item.orderQty ? false : true}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid Item container>
          <Grid item>
            <Typography>Total: LE. {item.orderQty * item.Price}</Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => dispatch(deleteCartItem(item.id))}
              deleteCartItem
            >
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
