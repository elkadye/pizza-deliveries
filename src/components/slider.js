import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "mui-image";

export default function Slider() {
  return (
    <>
      <Grid item container alignItems="center">
        <Grid item sm={0} md={3} />

        <Grid item container sm={12} md={6} mt={3} pb={5}>
          <Grid
            item
            xs={6}
            container
            alignContent="center"
            alignItems="center"
            py={1}
          >
            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
              Enjoy our <br />{" "}
              <span className="sliderSpan">delicious food</span>
            </Typography>
            {/* <Typography>
              this is the content this is the content this is the content this
              is the content this is the content this is the content this is the
              content
            </Typography> */}
          </Grid>
          <Grid item xs={6}>
            <Image src="/img/pizza_1.png" width="auto" height="auto" />
          </Grid>
        </Grid>
        <Grid item sm={0} md={3} />
      </Grid>
    </>
  );
}
