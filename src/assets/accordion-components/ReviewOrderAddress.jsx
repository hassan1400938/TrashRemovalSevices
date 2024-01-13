import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";

const CustomRadio = ({ label, icon }) => (
  <Box display="flex" alignItems="center">
    {icon}
    <Typography variant="body1">{label}</Typography>
  </Box>
);

export default function ReviewOrderAddress({ formData, updateFormData }) {
  const [addressType, setAddressType] = React.useState("Residential");
  const [showBusinessAddress, setShowBusinessAddress] = React.useState(false);

  const handleAddressTypeChange = (event) => {
    const selectedAddressType = event.target.value;

    // Update showBusinessAddress state
    setShowBusinessAddress(selectedAddressType === "Business");

    // Update formData with the selected address type
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          address: {
            ...formData.data.price_quote.address,
            address_type: selectedAddressType,
          },
        },
      },
    };

    // Call the function to update the formData
    updateFormData(updatedFormData);
  };

  const handleAddressChange = (field, value) => {
    // Update formData with the entered address details
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          address: {
            ...formData.data.price_quote.address,
            [field]: value,
          },
        },
      },
    };

    // Call the function to update the formData
    updateFormData(updatedFormData);
  };

  return (
    <Box>
      <InputLabel>Address Type</InputLabel>
      <RadioGroup
        aria-labelledby="address-type-radio-group"
        name="address-type-radio-group"
        value={formData.data.price_quote.address.address_type}
        onChange={handleAddressTypeChange}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <FormControlLabel
            value="Residential"
            control={<Radio />}
            label={
              <CustomRadio
                label="Residential"
                icon={<HomeIcon fontSize="inherit" />}
              />
            }
          />
          <FormControlLabel
            value="Business"
            control={<Radio />}
            label={
              <CustomRadio
                label="Business"
                icon={<BusinessIcon fontSize="inherit" />}
              />
            }
          />
        </Box>
      </RadioGroup>
      <Box mt={2}>
        {showBusinessAddress && (
          <TextField
            label="Company Name"
            variant="outlined"
            value={formData.data.price_quote.address.company_name}
            onChange={(e) =>
              handleAddressChange("company_name", e.target.value)
            }
          />
        )}
        <TextField
          label="Pickup Address"
          placeholder="Search places..."
          variant="outlined"
          value={formData.data.price_quote.address.pickup_address}
          onChange={(e) =>
            handleAddressChange("pickup_address", e.target.value)
          }
        />
        <TextField
          label="Apt Number (Optional)"
          variant="outlined"
          value={formData.data.price_quote.address.apt_number}
          onChange={(e) => handleAddressChange("apt_number", e.target.value)}
        />
      </Box>
      <Box>
        <Box sx={{ my: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Booking Details
          </Typography>
          <Typography variant="body2">
            {formData.data.price_quote.postal_code}
            {formData.data.price_quote.address.company_name !== "" &&
              `, ${formData.data.price_quote.address.company_name}`}
            {formData.data.price_quote.address.pickup_address !== "" &&
              `, ${formData.data.price_quote.address.pickup_address}`}
            {formData.data.price_quote.address.apt_number !== "" &&
              `, ${formData.data.price_quote.address.apt_number}`}
          </Typography>
          {/* <Typography variant="body2">Frequency - Once</Typography> */}
        </Box>

        <Box sx={{ my: 3 }}>
          <Typography variant="body1">
            Your transaction is protected by <strong>Stripe</strong>
          </Typography>
          <Typography variant="h6">
            I agree to the Terms of Service and Privacy Policy. As a business
            client, I have agreed to{" "}
            <strong>Corporate Service Agreement</strong>
          </Typography>
        </Box>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="I agree to the Terms of Service and Privacy Policy. I agree to receive text messages regarding my service updates."
        />
        <Typography variant="body2">
          Need help? We are here for you! You can chat with us here.
        </Typography>
      </Box>
    </Box>
  );
}
