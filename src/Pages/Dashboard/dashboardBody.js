import React from "react";
import { Grid } from "@mui/material";
// import Navbar from "../components/nav";
import SideBar from "../../components/dashboard/sideBar";
import Orders from "../../components/dashboard/orders";

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
            <div div className="darkBG">
                <SideBar />
            </div>
        </Grid>
        <Grid item xs={8}>
          <Orders />
        </Grid>
      </Grid>
    </>
  );
}
