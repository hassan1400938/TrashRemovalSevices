import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

export default function ChooseAService({ formData, updateFormData }) {
  const [userPostalCode, setUserPostalCode] = React.useState("");
  const [serviceAvailability, setServiceAvailability] = React.useState(
    "Check if we serve in your area."
  );
  //If user enter zipcode
  const handlePostalCodeChange = (event) => {
    const newPostalCode = event.target.value;
    setUserPostalCode(newPostalCode);

    // Update the serviceAvailability based on the contents of the TextField i.e zip code
    setServiceAvailability(
      newPostalCode.trim() === ""
        ? "Check if we serve in your area."
        : "Check if we serve in your area."
      // : "Hit CONTINUE to verify."
    );
  };

  //When user hit continue button for ZIP code verification
  function handlePostalCodeVerification() {
    const isServiceAvailable = formData.data.services_by_location.some(
      (location) => location.zip_code === parseInt(userPostalCode, 10)
    );
    // Return the appropriate message based on the postal code verification
    setServiceAvailability(
      isServiceAvailable
        ? "Service is available in your area"
        : "We do not serve in your area"
    );

    if (isServiceAvailable) {
      // Update the 'postal_code' value in price_quote
      const updatedFormData = {
        ...formData,
        data: {
          ...formData.data,
          price_quote: {
            ...formData.data.price_quote,
            postal_code: userPostalCode,
          },
        },
      };
      // Call the callback function to update the data in the parent
      updateFormData(updatedFormData);
    }
  }

  //////////////////////////////////////////

  const renderButtons = () => {
    if (
      serviceAvailability.includes("do not serve") ||
      // serviceAvailability.includes("CONTINUE") ||
      serviceAvailability.includes("if we serve")
    ) {
      return formData.data.basic_services.map((item) => (
        <Button
          variant="outlined"
          size="large"
          key={item.service_name}
          onClick={() => handleButtonClick(item.service_name, item.base_price)}
        >
          {item.service_name}
          <Typography>${item.base_price}</Typography>
        </Button>
      ));
    } else if (
      userPostalCode.trim() !== "" &&
      serviceAvailability.includes("available")
    ) {
      const servicesInLocation = formData.data.services_by_location.find(
        (location) => location.zip_code === parseInt(userPostalCode, 10)
      );
      if (servicesInLocation) {
        //render buttons
        return servicesInLocation.services.map((service) => (
          <Button
            variant="outlined"
            size="large"
            key={service.name}
            onClick={() => handleButtonClick(service.name, service.price)}
          >
            {service.name}
            <Typography>${service.price}</Typography>
          </Button>
        ));
      } else null;
    } else {
      return [];
    }
  };

  const handleButtonClick = (serviceName, servicePrice) => {
    const newData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          basic_services: {
            ...formData.data.price_quote.basic_services,
            service: serviceName,
            service_price: servicePrice,
          },
        },
      },
    };
    updateFormData(newData);
  };

  return (
    <Box>
      <Typography variant="body2" mt={2}>
        What do you need?
      </Typography>
      {renderButtons()}
      <Typography
        variant="body2"
        mt={2}
        style={{
          color: serviceAvailability.includes("available")
            ? "green"
            : serviceAvailability.includes("do not")
            ? "red"
            : "black",
          fontWeight: serviceAvailability.includes("available")
            ? "bold"
            : serviceAvailability.includes("do not")
            ? "bold"
            : "normal",
        }}
      >
        {serviceAvailability}
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter your ZIP code"
        variant3="outlined"
        value={userPostalCode}
        onChange={handlePostalCodeChange}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handlePostalCodeVerification}
      >
        Continue
      </Button>
    </Box>
  );
}
