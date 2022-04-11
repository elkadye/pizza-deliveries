import * as React from "react";
import { Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetCategories } from "../actions/catagories.actions";

export default function ButtonRow({ SetActiveCategory }) {
  const catagories = useSelector((state) => state.catagories);
  const dispatch = useDispatch();

  useEffect(() => dispatch(GetCategories()), []);

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
          }}
          // onClick={() => filterProducts("Popular")}
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
            onClick={() => SetActiveCategory(catagory.name)}
          >
            {catagory.name}
          </Button>
        </Grid>
      ))}
    </>
  );
}
