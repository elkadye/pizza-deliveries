import React from "react";
import { Grid } from "@mui/material";

import Body from "./dashboardBody";
import Navbar from "../components/navBar";
import Footer from "../components/footer"

export default function Dashboard() {
  return (
    <>
      <Grid item container direction="column">
        <Grid Item>
          <div className="darkBG">
            <Navbar />
          </div>
          
        </Grid>
        <Grid Item>
          <Body />
        </Grid>
        <Grid Item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
