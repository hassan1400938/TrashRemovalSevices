import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import CusotmRadioButtons from "./CusotmRadioButtons";
import ZipCodeTextField from "./ZipCodeTextField";

export default function ChooseAService({
  formData,
  updateFormData,
  onContinue,
}) {
  // console.log("ChooseAService.jsx rendered");
  // console.log(formData.data);
  const basic_services = formData.data.basic_services;
  const basicServicePQ = formData.data.price_quote.basic_services.service;
  const serviceAvailability = formData.data.texts.service_availability;
  const postalCodePQ = formData.data.price_quote.address.postal_code;
  const [serviceSelected, setServiceSelected] = React.useState(
    basic_services[0]
  );

  useEffect(() => {
    const newData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          basic_services: {
            ...formData.data.price_quote.basic_services,
            service: serviceSelected.name,
            service_price: serviceSelected.price,
          },
        },
      },
    };
    updateFormData(newData);
  }, [serviceSelected]);

  // Rendered services
  const renderServices = () => {
    console.log(serviceAvailability);
    if (
      serviceAvailability.includes("do not serve") ||
      // serviceAvailability.includes("CONTINUE") ||
      serviceAvailability.includes("if we serve")
    ) {
      return (
        <Box display="flex" my={2}>
          {/* Render default services */}
          <CusotmRadioButtons
            radioButtonData={basic_services}
            handleSelection={handleServiceSelection}
          />
        </Box>
      );
    } else if (
      postalCodePQ.trim() !== "" &&
      serviceAvailability.includes("available")
    ) {
      const servicesInLocation = formData.data.services_by_location.find(
        (location) => location.zip_code === parseInt(postalCodePQ, 10)
      );
      if (servicesInLocation) {
        //render services from location
        // console.log("Services in Zip code");
        // console.log(servicesInLocation.services);
        return (
          <Box display="flex" my={2}>
            <CusotmRadioButtons
              radioButtonData={servicesInLocation.services}
              handleSelection={handleServiceSelection}
            />
          </Box>
        );
      } else null;
    } else {
      return [];
    }
  };

  const handleServiceSelection = (newService) => {
    setServiceSelected((service) => ({
      ...service,
      ...newService,
    }));
  };

  const handleContinue = () => {
    if (!formData.data.form_disabled.date_time) {
      onContinue();
    }
  };

  return (
    <Box>
      <Typography variant="subtitle1">What do you need?</Typography>
      <Box mt={2} mb={5}>
        {renderServices()}
      </Box>
      <Box>
        <ZipCodeTextField formData={formData} updateFormData={updateFormData} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button variant="contained" size="large" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}
