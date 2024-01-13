import React, { useEffect, useState } from "react";
import { Grid, Typography, Divider, Box, Button, setRef } from "@mui/material";
import { amber } from "@mui/material/colors";

export default React.memo(function PriceQuote({ formData, updateFormData }) {
  console.log(formData.data.price_quote);
  const priceQuoteData = formData.data.price_quote;
  const serviceSelected = formData.data.price_quote.basic_services;
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    // Calculate and update Services total
    const totalbasicServicesPrice =
      serviceSelected.service_price + serviceSelected.vehicle_price;

    // Calculate the total amount of all selected items
    const totalAdditionalItemsAmount =
      priceQuoteData.tasks.additional_items.reduce((total, item) => {
        return total + item.total_amount;
      }, 0);

    // Calculate the total amount of all stairs and dismantles items
    const totalStairsDismantlingItemsAmount =
      priceQuoteData.tasks.stairs_dismantling.reduce((total, item) => {
        return total + item.total_amount;
      }, 0);

    // Update grandTotal state
    setGrandTotal(
      totalbasicServicesPrice +
        totalAdditionalItemsAmount +
        totalStairsDismantlingItemsAmount
    );
    // Update grand_total in formData only if grandTotal has changed
    if (formData.data.price_quote.grand_total !== grandTotal) {
      const updatedFormData = {
        ...formData,
        data: {
          ...formData.data,
          price_quote: {
            ...formData.data.price_quote,
            grand_total: grandTotal,
          },
        },
      };
      updateFormData(updatedFormData);
    }
  }, [grandTotal, formData, updateFormData]);

  const selectedTaskItems = priceQuoteData.tasks.additional_items.map(
    (item, i) => {
      return (
        <Grid container spacing={2} key={i}>
          <Grid item xs={8}>
            <Typography variant="body2">
              {item.item_name} {"(X" + item.quantity + ")"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              ${item.total_amount.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      );
    }
  );

  const selectedStairsDismantlingItems =
    priceQuoteData.tasks.stairs_dismantling.map((item, i) => {
      return (
        <Grid container spacing={2} key={i}>
          <Grid item xs={8}>
            <Typography variant="body2">
              {item.item_name} {"(X" + item.quantity + ")"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              ${item.total_amount.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      );
    });

  return (
    <Box sx={{ backgroundColor: amber }}>
      <Box sx={{ py: 3, px: 2 }}>
        <Typography variant="h2">Price Quote</Typography>
        {/* Service Selected */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="body2">{serviceSelected.service}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              ${serviceSelected.service_price.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        {/* Vehicle Selected */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="body2">
              {serviceSelected.vehicle_name != "" &&
                `Vehicle Size: ${serviceSelected.vehicle_name}`}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">
              ${serviceSelected.vehicle_price.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        {/* Task Items Selected */}
        {selectedTaskItems}
        <br></br>
        {selectedStairsDismantlingItems}
        <Divider />
        <Typography variant="h4">Booking Details</Typography>

        {/* Pick up date */}
        <Typography variant="body2">
          {priceQuoteData.date_time.pickup_date}
          {priceQuoteData.date_time.pickup_time !== "" &&
            ` at ${priceQuoteData.date_time.pickup_time}`}
        </Typography>

        {/* Address */}
        <Typography variant="body2">
          {formData.data.price_quote.postal_code}
          {formData.data.price_quote.address.company_name !== "" &&
            `, ${formData.data.price_quote.address.company_name}`}
          {formData.data.price_quote.address.pickup_address !== "" &&
            `, ${formData.data.price_quote.address.pickup_address}`}
          {formData.data.price_quote.address.apt_number !== "" &&
            `, ${formData.data.price_quote.address.apt_number}`}
        </Typography>

        {/*Grand Total  */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">
              ${formData.data.price_quote.grand_total.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        <Button variant="contained" size="large">
          Checkout
        </Button>
      </Box>
    </Box>
  );
});
