import React from "react";
import { Typography, Box, TextField, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const ZipCodeTextField = ({ formData, updateFormData }) => {
  console.log("ZipCode.jsx rendered");

  // const postalCodeTemp = formData.data.postal_code_temp;
  const postalCodePQ = formData.data.price_quote.address.postal_code;
  const serviceAvailabilityText = formData.data.texts.service_availability;

  const [postalCodeError, setPostalCodeError] = React.useState(false);

  // formData.data.price_quote.address.postal_code,
  //In TextField: Set user postal code and availability
  const handlePostalCodeChange = (e) => {
    const cleanedValue = e.target.value.replace(/\D/g, ""); //accept only numbers

    if (cleanedValue.length <= 5) {
      // Update the serviceAvailabilityText based on the contents of the TextField and zipcode
      // setServiceAvailabilityText(

      const newText =
        cleanedValue.trim() === ""
          ? "Check if we serve in your area."
          : "Check if we serve in your area.";
      // : "Hit CONTINUE to verify."

      //insert postal code and availability text into formData
      const updatedFormData = {
        ...formData,
        data: {
          ...formData.data,
          // postal_code_temp: cleanedValue,
          texts: {
            ...formData.data.texts,
            service_availability: newText,
          },
          price_quote: {
            ...formData.data.price_quote,
            address: {
              ...formData.data.price_quote.address,
              postal_code: cleanedValue,
            },
          },
        },
      };
      // Call the callback function to update the data in the parent
      updateFormData(updatedFormData);

      //Validation
      e.target.validity.valid
        ? setPostalCodeError(false)
        : setPostalCodeError(true);

      // );
    }
  };

  //OnBlur and OnKeyDown: ZIP code verification
  function handlePostalCodeVerification() {
    // find availabiliy from formData
    const servicesInLocation = formData.data.services_by_location.find(
      (location) => location.zip_code === parseInt(postalCodePQ, 10)
    );

    if (servicesInLocation) {
      // console.log(servicesInLocation.services);
      const findSelectedServicebyName = servicesInLocation.services.find(
        (service) =>
          service.name === formData.data.price_quote.basic_services.service
      );

      // Return and update the appropriate message and default services in price quote based on the postal code verification
      const updatedFormData = {
        ...formData,
        data: {
          ...formData.data,
          texts: {
            ...formData.data.texts,
            service_availability: "Service is available in your area.",
          },
          price_quote: {
            ...formData.data.price_quote,
            basic_services: {
              ...formData.data.price_quote.basic_services,
              service: findSelectedServicebyName
                ? findSelectedServicebyName.name
                : "",
              service_price: findSelectedServicebyName
                ? findSelectedServicebyName.price
                : 0,
            },
          },
        },
      };

      updateFormData(updatedFormData);
    } else if (!servicesInLocation) {
      const newText =
        postalCodePQ === ""
          ? "Check if we serve in your area."
          : "We do not serve in your area.";

      // Return and update the appropriate message and default services in price quote based on the postal code verification
      const updatedFormData = {
        ...formData,
        data: {
          ...formData.data,

          texts: {
            ...formData.data.texts,
            service_availability: newText,
          },
        },
      };
      updateFormData(updatedFormData);
    }
  }

  return (
    <Box>
      <Typography
        variant="body2"
        my={2}
        style={{
          color: serviceAvailabilityText.includes("available")
            ? "green"
            : serviceAvailabilityText.includes("do not")
            ? "red"
            : "black",
          fontWeight: serviceAvailabilityText.includes("available")
            ? "bold"
            : serviceAvailabilityText.includes("do not")
            ? "bold"
            : "normal",
        }}
      >
        {serviceAvailabilityText}
      </Typography>
      <TextField
        fullWidth
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%" },
        }}
        required
        type="search"
        label="Enter your ZIP code"
        variant="outlined"
        error={postalCodeError}
        helperText={postalCodeError ? "A valid  postal Code is required." : ""}
        value={postalCodePQ}
        onChange={handlePostalCodeChange}
        onBlur={
          // event.preventDefault(); // Prevent the default behavior of the Enter key
          handlePostalCodeVerification
        }
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default behavior of the Enter key
            handlePostalCodeVerification();
          }
        }}
        InputProps={{
          endandornment: (
            <IconButton
              aria-label="clear search"
              onClick={() => {
                setSearchText("");
              }}
              edge="end"
            >
              <CancelIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default ZipCodeTextField;
