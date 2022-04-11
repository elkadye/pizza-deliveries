import React from "react";
import {
  Grid,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { addOrder } from "../actions/order.actions";
import { useEffect } from "react";
import { ResetProductOrderQty } from "../actions/products.actions";


export default function CheckoutForm() {
  const navigate = useNavigate();

  const padding = 1;

   const cartItems = useSelector((state) => state.cartItems);
   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name:"",
      address:"",
      mobile:"",
      city:""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required"),
      mobile: Yup.string()
        .required("Required"),
      city: Yup.string()
        .required("Required"),
      address: Yup.string()
        .required("Required"),
    }),
    onSubmit: (values) => {
       console.log(cartItems);
      dispatch(addOrder({ ...values, orderItems: cartItems}));
      formik.resetForm();
      dispatch(ResetProductOrderQty());
       navigate("/");

    },
  });
 console.log(cartItems);


  return (
    <form onSubmit={formik.handleSubmit} className="checkoutForm">
      <Box
        py={padding}
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          error={Boolean(formik.errors.name) && formik.touched.name}
          helperText={formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          fullWidth
          required
          label="Name"
          variant="standard"
          name="name"
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
          error={Boolean(formik.errors.mobile) && formik.touched.mobile}
          helperText={formik.errors.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
          fullWidth
          required
          label="Mobile"
          variant="standard"
          name="mobile"
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
          error={Boolean(formik.errors.address) && formik.touched.address}
          helperText={formik.errors.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          fullWidth
          required
          label="Street Address"
          variant="standard"
          name="address"
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
          error={Boolean(formik.errors.city) && formik.touched.city}
          helperText={formik.errors.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          fullWidth
          required
          label="City"
          variant="standard"
          name="city"
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Button
            type="submit"
            // onClick={formik.handleSubmit}
            fullWidth
            variant="contained"
            color="error"
            disabled={cartItems.length>0 ? false : true}
          >
            Checkout Now
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/");
            }}
          >
            Add More items
            {/* <Link to="/" underline="hover">
              Add More items
            </Link> */}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
