import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import OrderCard from "./orderCard";

export default function Orders({ orders, ordersStatus }) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 

  return (
    <>
      {/* <Grid container alignItems="center" mt={5}> */}
      {/* <Grid item xs={0} md={1} border={8} borderColor="success" /> */}

      <Grid container xs={12} spacing={3} ml={1}>
        {orders
          .filter((order) => order.completed === ordersStatus)
          .map((order) => (
            <Grid item key={order.id} container xs={12} sm={6} md={4} pb={3}>
              <OrderCard order={order} />
            </Grid>
          ))}

        {/* <Grid item container xs={12} sm={6} md={4} pb={3}>
          <Grid Item container direction="column" border={1}>
            <Grid item>
              <Box
                sx={{
                  textAlign: "right",
                  paddingRight: 2,
                  backgroundColor: "primary.light",
                }}
              >
                <Typography variant="h5">0000</Typography>
              </Box>
            </Grid>
            <Grid item pl={1}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Seafood Qty"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Seafood Qty"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Seafood Qty"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Seafood Qty"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Seafood Qty"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Seafood Qty"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Seafood Qty"
                  onChange={handleChange}
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
}
