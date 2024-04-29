import React from "react";
import { Box, Typography } from "@mui/material";
import CusotmRadioButtons from "./CusotmRadioButtons";

export default function ChooseAVehicle({
  formData,
  changeDefaultVehicle,
  handleVehiclesSelection,
}) {
  const { postal_code } = formData.data.price_quote.address;

  // Find Services for the current postal code
  const servicesInLocation = formData.data.services_by_location.find(
    (location) => location.zip_code === parseInt(postal_code, 10)
  );

  React.useEffect(() => {
    // Check if the default vehicle has changed before updating
    if (
      servicesInLocation &&
      (formData.data.price_quote.basic_services.vehicle_name !==
        servicesInLocation.vehicles[0].name ||
        formData.data.price_quote.basic_services.vehicle_price !==
          servicesInLocation.vehicles[0].price)
    ) {
      // Update default vehicle by location
      changeDefaultVehicle(
        servicesInLocation.vehicles[0].name,
        servicesInLocation.vehicles[0].price
      );
      // console.log("default vehicle updated");
    } else {
      console.log("default vehicle didn't update");
    }
  }, [formData.data.price_quote.address.postal_code]);

  // Render available vehicles
  if (servicesInLocation) {
    return (
      <>
        <Typography variant="subtitle1">Choose a vehicle</Typography>
        <Typography variant="body1" my={2}>
          Make your best guess. We will review every order.
        </Typography>
        <Box display="flex" my={2}>
          <CusotmRadioButtons
            radioButtonData={servicesInLocation.vehicles}
            handleSelection={handleVehiclesSelection}
          />
        </Box>
      </>
    );
  } else {
    // console.log(
    //   "No vehicles available for the specified location so NO BUTTON Rendered"
    // );
  }
}
