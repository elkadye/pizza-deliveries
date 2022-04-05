import * as React from "react";
import { Grid, Box, Typography, Card, Button, TextField,CardContent,CardMedia, IconButton} from "@mui/material";
import Image from "mui-image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Items() {
  return (
    <React.Fragment>
      <Grid item xs={11} pb={3} px={4}>
       
          <Grid container spacing={2} pb={1}>
            <Grid item xs={6}>
              <Image src="/img/pizza_2.png" width="auto" height="auto" />
            </Grid>
            <Grid item xs={6} container direction="column">
              <Grid Item>
                <Typography variant="h5"> Title</Typography>
              </Grid>

              <Grid Item container direction="row" alignItems="center">
                <Grid item>
                  <Typography>Qty: 1</Typography>
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
                  <Typography>Total: LE. 100.00</Typography>
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
        
      </Grid>
    </React.Fragment>
  );
}

const props={
  Title: "Seafood Pizza",
  Description: "Shrimp, Squid,Pineapple",
  Price: 100,
  Image: "/img/pizza_2.png"
}

export default function MenuItem(props) {

    
  return (
    <>
      <Grid container direction="column" className="checkoutitems">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Grid item xs={12} px={4}>
          <div className="checkoutTotal">
            <Typography variant="h5" component="p">
              Subtotal: <span className="subtotal">700</span>
            </Typography>
          </div>
        </Grid>
      </Grid>

      {/* <Card>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image src={props.Image} width="auto" height="auto" />
          </Grid>
          <Grid item xs={6} container direction="column">
            <Grid Item>
              <Typography variant="h5"> {props.Title}</Typography>
            </Grid>
            <Grid Item>
              <Typography variant="h6">{props.Description}</Typography>
            </Grid>
            <Grid Item>
              <Typography>Price: LE. {props.Price}</Typography>
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
      </Card> */}

      {/* <Grid container alignItems="center" mt={5}>
        <Grid item xs={0} md={2} border={8} borderColor="success" />
        <Grid container xs={12} md={8} spacing={5} direction="column">
          <Grid item container alignItems="center" justifyContent="center">
            <ButtonRow />
          </Grid>
          <Grid item container spacing={2}>
            <MenuRow />
            <MenuRow />
            <MenuRow />
          </Grid>
        </Grid>

        <Grid item xs={0} md={2} />
      </Grid> */}
    </>
  );
}
