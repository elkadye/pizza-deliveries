import * as React from "react";
import { Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetCatagories } from "../actions/catagories.actions";

export default function ButtonRow() {
  const catagories = useSelector((state) => state.catagories);
  const dispatch = useDispatch();

  useEffect(() => dispatch(GetCatagories()), []);

  console.log(catagories);
  return (
    <>
      <Grid item md={2}>
        <Button
          fullWidth
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

      {catagories.map((catagory) => (
        <Grid item md={2}>
          <Button
            key={catagory.id}
            fullWidth
            variant="outlined"
            color="error"
            sx={{
              p: 2,
              m: 2,
              color: "black",
              // textTransform: "lowercase"
            }}
          >
            {catagory.Name}
          </Button>
        </Grid>
      ))}
    </>
  );
}
