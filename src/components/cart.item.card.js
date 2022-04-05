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

export default function CartItemsCard({ item }) {
  console.log(item);
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
            <Typography>Qty: {item.Qty}</Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid Item container>
          <Grid item>
            <Typography>Total: LE. {item.Qty*item.Price}</Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
