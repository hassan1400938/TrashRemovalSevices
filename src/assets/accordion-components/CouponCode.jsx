import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

const CouponCode = ({ formData, updateFormData }) => {
  const [couponCode, setCouponCode] = useState("");

  const handleCouponCode = () => {
    // Update formData with the entered coupon code
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          coupon_code: couponCode,
        },
      },
    };

    // Call the function to update the formData
    updateFormData(updatedFormData);

    // Optionally, you can clear the input field after updating the coupon code
    setCouponCode("");
  };

  return (
    <div>
      <Typography variant="body1">Coupon Code</Typography>
      <Box display="flex" alignItems="center">
        <TextField
          id="outlined-basic"
          label="Enter a promo code"
          variant="outlined"
          placeholder="Enter a promo code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <Button variant="outlined" size="large" onClick={handleCouponCode}>
          Enter
        </Button>
      </Box>
    </div>
  );
};

export default CouponCode;
