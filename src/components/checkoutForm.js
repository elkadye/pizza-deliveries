import React from "react";
import {
  Grid,
  Typography,
  Form,
  FormGroup,
  TextField,
  Box,
  Button,
} from "@mui/material";

export default function CheckoutForm() {
  const padding = 4;
  return (
    <form className="checkoutForm">
      <Box
        py={padding}
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          required
          id="standard-required"
          label="Required"
          defaultValue="Name"
          variant="standard"
        />
      </Box>
      <Box
        py={padding}
        sx={{
          width: 300,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          required
          id="standard-required"
          label="Required"
          defaultValue="Mobile"
          variant="standard"
        />
      </Box>
      <Box
        py={padding}
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          required
          id="standard-required"
          label="Required"
          defaultValue="Street Address"
          variant="standard"
        />
      </Box>
      <Box
        py={padding}
        sx={{
          width: 300,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          required
          id="standard-required"
          label="Required"
          defaultValue="City"
          variant="standard"
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Button fullWidth variant="contained" color="error">
            Checkout Now
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" >
            Add More items
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
