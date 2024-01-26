import React from "react";
import { Box } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

export default function StripePayment() {
  return (
    <Box sx={{ display: "flex" }}>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </Box>
  );
}
