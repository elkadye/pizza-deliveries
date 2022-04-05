import * as React from "react";
import { Grid, Typography,TextField,Card } from "@mui/material";
import Image from "mui-image";

export default function MenuProductCard({product}) {  
       console.log(product)
  return (
     
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image src="/img/pizza_2.png" width="auto" height="auto" />
        </Grid>
        <Grid item xs={6} container direction="column">
          <Grid Item>
            <Typography variant="h5"> {product.Title}</Typography>
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
  );
}
