import React from "react";
import BookingForm from "./assets/BookingForm";

import Grid from "@mui/material/Grid";
export default function Booking() {
  return (
    <div className="booking--container">
      <h1 className="booking--title">Booking Page Title Here</h1>
      <Grid container spacing={2} className="mui-grid">
        <Grid item xs={8} className="mui-grid--booking-form">
          <BookingForm />
        </Grid>
        <Grid item xs={4} className="mui-grid--price-quote">
          <h2>Price Quote</h2>
        </Grid>
      </Grid>
    </div>
  );
}
