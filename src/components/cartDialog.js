import React from "react";
import {
  Grid,
  Typography,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemsCard from "./cart.item.card";

const CartDialog = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const badgeCount = cartItems.reduce((accumulator, object) => {
    return accumulator + object.orderQty;
  }, 0);

  const cartTotal = cartItems.reduce((accumulator, object) => {
    return accumulator + object.orderQty * object.price;
  }, 0);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Button onClick={handleClickOpen("paper")}>
        <Badge badgeContent={badgeCount} color="primary"></Badge>{" "}
        <img
          component="button"
          width="30%"
          height="30%"
          src="/img/delivery.png"
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle>
          <Typography variant="h6"> Order Details</Typography>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
      
          <Grid item container spacing={2}>
            {cartItems.map((item) => (
              <Grid item container key={item.id} pb={3}>
                <CartItemsCard item={item} />
              </Grid>
            ))}
          </Grid>
          <div className="checkoutTotal">
            <Typography variant="h5" component="p">
              Order Total: {cartTotal}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions className="dialogBtn" >
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button variant="contained">
            <Link to="/checkout" textDecoration="none">
              Checkout
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CartDialog;
