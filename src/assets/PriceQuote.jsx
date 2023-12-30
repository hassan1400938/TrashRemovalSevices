import React from "react";
import { Grid, Typography, Divider, Box, Button } from "@mui/material";

export default React.memo(function PriceQuote({ formData }) {
  console.log("PriceQuote Component Rendered");
  const priceQuoteData = formData.data.price_quote;
  const basicServices = formData.data.price_quote.basic_services;

  // Calculate basic services total
  const totalbasicServicesPrice =
    basicServices.service_price + basicServices.vehicle_price;

  //Grand Total
  const grandTotal = totalbasicServicesPrice;
  // Format grand total with two decimal points and currency sign
  const formattedGrandTotalPrice = `$${grandTotal.toFixed(2)}`;

  return (
    <Box sx={{ backgroundColor: "orange" }}>
      <Box sx={{ py: 3, px: 2 }}>
        <Typography variant="h2">Price Quote</Typography>
        {/* Item#1 */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="body2">{basicServices.service}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              ${basicServices.service_price.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        {/* Item#2 */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="body2">
              {basicServices.vehicle_name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              ${basicServices.vehicle_price.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="h4">Booking Details</Typography>
        <Typography variant="body2">
          {priceQuoteData.date_time.pickup_date}
          {priceQuoteData.date_time.pickup_time !== "" &&
            ` at ${priceQuoteData.date_time.pickup_time}`}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">{formattedGrandTotalPrice}</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" size="large">
          Checkout
        </Button>
      </Box>
    </Box>
  );
});
