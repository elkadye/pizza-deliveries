import * as React from "react";
import { Grid, Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetProducts } from "../actions/products.actions.js";
import ButtonRow from "./catagoriesMenu.js";
import MenuProductCard from "./menu.product.card";

// function ButtonRow() {
//   return (
//     <React.Fragment>
//       <Grid item>
//         <Button
//           variant="outlined"
//           color="error"
//           sx={{
//             p: 2,
//             m: 2,
//             color: "black",
//             // textTransform: "lowercase"
//           }}
//         >
//           Popular
//         </Button>
//       </Grid>

//       <Grid item>
//         <Button
//           variant="contained"
//           color="error"
//           sx={{
//             p: 2,
//             m: 2,

//             // textTransform: "lowercase"
//           }}
//         >
//           Pizza
//         </Button>
//       </Grid>
//       <Grid item>
//         <Button
//           variant="outlined"
//           color="error"
//           sx={{
//             p: 2,
//             m: 2,
//             color: "black",
//             // textTransform: "lowercase"
//           }}
//         >
//           burger
//         </Button>
//       </Grid>
//       <Grid item>
//         <Button
//           variant="outlined"
//           color="error"
//           sx={{
//             p: 2,
//             m: 2,
//             color: "black",
//             // textTransform: "lowercase"
//           }}
//         >
//           crepe
//         </Button>
//       </Grid>
//       <Grid item>
//         <Button
//           variant="outlined"
//           color="error"
//           sx={{
//             p: 2,
//             m: 2,
//             color: "black",
//             // textTransform: "lowercase"
//           }}
//         >
//           drinks
//         </Button>
//       </Grid>
//     </React.Fragment>
//   );
// }

export default function Menu() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => dispatch(GetProducts()), []);

  console.log(products);
  return (
    <>
      <Grid container alignItems="center" mt={5}>
        <Grid item xs={0} md={2} border={8} borderColor="success" />
        <Grid container xs={12} md={8} spacing={5} direction="column">
          <Grid item container alignItems="center" justifyContent="center" spacing={2}>
            <ButtonRow />
          </Grid>
          <Grid item container spacing={2}>
            {products.map((product) => (
              <Grid
                item
                container
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                pb={3}
              >
                <MenuProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={0} md={2} />
      </Grid>
    </>
  );
}
