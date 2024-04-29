import React, { useEffect, useState } from "react";
import { Grid, Typography, Divider, Box, Button, Hidden } from "@mui/material";
import { useTheme } from "@emotion/react";
import StripePaymentDialog from "../../components/StripePaymentDialog";

export default React.memo(function PriceQuote({ formData, updateFormData }) {
  // console.log("PriceQuote.jsx randered");
  const theme = useTheme();
  const priceQuoteData = formData.data.price_quote;
  const serviceSelected = formData.data.price_quote.basic_services;
  const priceQuoteAddress = formData.data.price_quote.address;
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
  }, [grandTotal, updateFormData]);

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
            <Typography variant="body2" textAlign="right">
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
            <Typography variant="body2" textAlign="right">
              ${item.total_amount.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      );
    });

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Box sx={{ p: { xs: 1, sm: 1, md: 3.5 } }}>
        <Typography variant="h2">Price Quote</Typography>
        <Box sx={{ my: 2 }}>
          {/* Service Selected */}
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="body2">{serviceSelected.service}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" align="right">
                ${serviceSelected.service_price.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          {/* Vehicle Selected */}
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="body2">
                {serviceSelected.vehicle_name != "" &&
                  `Vehicle Size: ${serviceSelected.vehicle_name}`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" align="right">
                ${serviceSelected.vehicle_price.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          {/* Task Items Selected */}
          {selectedTaskItems}
          <br></br>
          {selectedStairsDismantlingItems}
        </Box>

        <Divider />
        <Box sx={{ my: 2 }}>
          <Typography variant="h3">Booking Details</Typography>

          {/* Pick up date */}
          <Typography variant="body2" sx={{ my: 2 }}>
            {priceQuoteData.date_time.pickup_date}
            {priceQuoteData.date_time.pickup_time !== "" &&
              ` at ${priceQuoteData.date_time.pickup_time}`}
          </Typography>

          {/* Address */}
          <Typography variant="body2">
            {priceQuoteAddress.company_name &&
            (priceQuoteAddress.apt_number ||
              priceQuoteAddress.pickup_street_address) !== ""
              ? `${priceQuoteAddress.company_name}, `
              : `${priceQuoteAddress.company_name} `}

            {priceQuoteAddress.apt_number !== "" &&
              `${priceQuoteAddress.apt_number} `}

            {priceQuoteAddress.pickup_street_address &&
            priceQuoteAddress.postal_code !== ""
              ? `${priceQuoteAddress.pickup_street_address}, `
              : `${priceQuoteAddress.pickup_street_address} `}

            {priceQuoteAddress.postal_code !== "" &&
              `${priceQuoteAddress.postal_code}.`}
          </Typography>
        </Box>

        {/*Grand Total  */}
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h2">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" align="right">
              ${formData.data.price_quote.grand_total.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", mt: 2 }}>
          <StripePaymentDialog formData={formData} />
        </Box>
      </Box>
    </Box>
  );
});
