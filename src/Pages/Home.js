import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../components/nav";
import Slider from "../components/slider";
import Menu from "../components/menu";


export default function Home() {
  return (
    <>
      <Grid container>
        <div className="darkBG">
          <Navbar />
          <Slider />
        </div>
        <Menu />
      </Grid>
    </>
  );
}
