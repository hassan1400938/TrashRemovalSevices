import React from "react";
import { Button, Typography } from "@mui/material";

export default function ChooseAVehicle({
  formData,
  changeDefaultVehicle,
  handleButtonClick,
}) {
  const { postal_code } = formData.data.price_quote;

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
  }, [formData.data.price_quote.postal_code]);

  // Render available vehicles as buttons
  if (servicesInLocation) {
    return servicesInLocation.vehicles.map((vehicle) => (
      <Button
        variant="outlined"
        size="large"
        key={vehicle.name}
        onClick={() => handleButtonClick(vehicle.name, vehicle.price)}
      >
        {vehicle.name}
        <Typography>${vehicle.price}</Typography>
      </Button>
    ));
  } else {
    console.log(
      "No vehicles available for the specified location so NO BUTTON Rendered"
    );
  }
}
