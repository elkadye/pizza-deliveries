import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../components/dashboard/navBar";
import Body from "./dashboardBody";

import Footer from "../../components/dashboard/footer";

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
