import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import ZipCodeTextField from "./ZipCodeTextField";

const CustomRadio = ({ label, icon }) => (
  <Box display="flex" alignItems="center">
    {icon}
    <Typography variant="body1">{label}</Typography>
  </Box>
);

export default function ReviewOrderAddress({
  formData,
  updateFormData,
  onContinue,
}) {
  const priceQuoteAddress = formData.data.price_quote.address;

  const [showBusinessAddress, setShowBusinessAddress] = React.useState(false); // If true Company Name TetxtField show
  const [companyName, setCompanyName] = React.useState("");
  const [termsConditionsChecked, setTermsConditionsChecked] =
    React.useState(false);

  const [companyNameError, setCompanyNameError] = React.useState(false);
  const [streetAddressError, setStreetAddressError] = React.useState(false);
  const termsConditionsError = !termsConditionsChecked;

  //Radio Group onChange Residentional/Business
  const handleAddressTypeChange = (event) => {
    const selectedAddressType = event.target.value;
    setCompanyName(companyName ? "" : companyName);

    setShowBusinessAddress(selectedAddressType === "Business"); // Update showBusinessAddress state

    // Update address type in formData
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

  React.useEffect(() => {
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        form_disabled: {
          ...formData.data.form_disabled,
          pre_payment:
            ((priceQuoteAddress.address_type === "company" &&
              priceQuoteAddress.company_name !== "") ||
              (priceQuoteAddress.address_type &&
                priceQuoteAddress.pickup_street_address &&
                priceQuoteAddress.postal_code) !== "") &&
            termsConditionsChecked
              ? false
              : true,
        },
      },
    };
    updateFormData(updatedFormData);
  }, [priceQuoteAddress, termsConditionsChecked]);

  const handleContinue = () => {
    !formData.data.form_disabled.pre_payment && onContinue();
  };

  return (
    <Box>
      <Typography variant="subtitle1">Address Type</Typography>
      <RadioGroup
        aria-labelledby="address-type-radio-group"
        name="address-type-radio-group"
        value={priceQuoteAddress.address_type}
        onChange={handleAddressTypeChange}
      >
        <Box my={2}>
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

      {/* Address Fields */}
      <Box width="75%">
        {/* If select Business */}
        {showBusinessAddress && (
          <TextField
            required
            fullWidth
            sx={{ mb: 2 }}
            label="Company Name"
            variant="outlined"
            value={priceQuoteAddress.company_name}
            onChange={(e) => {
              handleAddressChange("company_name", e.target.value);
              e.target.validity.valid
                ? setCompanyNameError(false)
                : setCompanyNameError(true);
            }}
            error={companyNameError}
            helperText={companyNameError ? "This field is required" : ""}
          />
        )}
        <TextField
          required
          fullWidth
          sx={{ mb: 2 }}
          name="address1"
          label="Pcikup Address"
          placeholder="Enter your street address"
          variant="outlined"
          value={priceQuoteAddress.pickup_street_address}
          onChange={(e) => {
            handleAddressChange("pickup_street_address", e.target.value);
            e.target.validity.valid
              ? setStreetAddressError(false)
              : setStreetAddressError(true);
          }}
          error={streetAddressError}
          helperText={streetAddressError ? "This Field is required" : ""}
        />
        <TextField
          fullWidth
          label="Apt Number (Optional)"
          name="suite"
          variant="outlined"
          value={priceQuoteAddress.apt_number}
          onChange={(e) => handleAddressChange("apt_number", e.target.value)}
        />
      </Box>
      {/* Booking details */}
      <Box sx={{ my: 3 }}>
        <Typography variant="subtitle1">Booking Details</Typography>
        <Typography variant="body2" my={2}>
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
        {/* <Typography variant="body2">Frequency - Once</Typography> */}
      </Box>
      <Box>
        <Box my={3}>
          <Typography variant="body2">
            Your transaction is protected by <strong>Stripe</strong>
          </Typography>
          <Typography variant="body2" my={2}>
            I agree to the Terms of Service and Privacy Policy. As a business
            client, I have agreed to{" "}
            <strong>Corporate Service Agreement</strong>
          </Typography>
        </Box>
        <FormControlLabel
          required
          error={termsConditionsError.toString()}
          control={
            <Checkbox
              checked={termsConditionsChecked}
              onChange={() => {
                setTermsConditionsChecked(!termsConditionsChecked);
              }}
            />
          }
          label="I agree to the Terms of Service and Privacy Policy. I agree to receive text messages regarding my service updates."
        />
        {termsConditionsError && (
          <Typography variant="body2" sx={{ color: "red" }}>
            You must accept T&C to avail services.
          </Typography>
        )}

        <Typography variant="body2" my={3}>
          Need help? We are here for you! You can chat with us here.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button variant="contained" size="large" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}
