import React from "react";
import data from "./data";
import BookingProcess from "./assets/BookingProcess";
import PriceQuote from "./assets/PriceQuote";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import ResponsiveAppBar from "./assets/ResponsiveAppBar";

function App() {
  console.log("App Component Rendered");
  const theme = useTheme();
  const [formData, setFormData] = React.useState(data);
  const updateFormData = (newData) => {
    setFormData(newData);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.lightest,
          minHeight: "100vh",
        }}
      >
        <ResponsiveAppBar />
        <Box sx={{ p: { xs: 2, sm: 2, md: 3, lg: 5 } }}>
          <Typography variant="h1" sx={{ my: 3 }}>
            Amphaul Booking
          </Typography>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{ order: { xs: 2, sm: 2, md: 1 } }}
            >
              <BookingProcess
                formData={formData}
                updateFormData={updateFormData}
              />
              <Box>
                <Typography sx={{ mt: 3, fontSize: "0.6em" }} variant="body2">
                  Powered by RIXOSOL
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{ order: { xs: 1, sm: 1, md: 2 } }}
            >
              <PriceQuote formData={formData} updateFormData={updateFormData} />
              {console.log(formData.data.price_quote)}
              {console.log(formData.data.form_disabled)}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
export default React.memo(App);
