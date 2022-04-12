 import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {markCompletedOrder}  from "../../actions/order.actions";


export default function OrderCard({ order }) {
  console.log(order);
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  const dispatch = useDispatch();
  return (
    <>
      <Grid Item container direction="column" border={1}>
        <Grid item>
          <Box
            sx={{
              textAlign: "right",
              paddingRight: 2,
              backgroundColor: "primary.light",
            }}
          >
            <Typography variant="h5">{order.created_at}</Typography>
          </Box>
        </Grid>
        <Grid item pl={1}>
          <FormGroup>
            {order.orderProducts.map((item) => (
              <FormControlLabel
                control={<Checkbox />}
                label={item.product.name}
                onChange={handleChange}
              />
            ))}
          </FormGroup>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => dispatch(markCompletedOrder(order.id))}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );}