import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StripePayment from "./StripePayment";

export default function StripePaymentDialog({ formData }) {
  const [open, setOpen] = React.useState(false);

  const priceQuoteCustomer = formData.data.price_quote.customer;

  console.log(priceQuoteCustomer);
  const handleClickOpen = () => {
    (priceQuoteCustomer.first_name && priceQuoteCustomer.email) != ""
      ? setOpen(true)
      : setOpen(false);

    console.log(priceQuoteCustomer);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        onClick={handleClickOpen}
        sx={{ width: "100%" }}
      >
        Checkout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>Secure Payment with Stripe</DialogTitle>
        <DialogContent>
          <StripePayment />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit"></Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
