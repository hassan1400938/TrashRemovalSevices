import React from "react";
import data from "./data";
import BookingProcess from "./components/BookingProcess";
import PriceQuote from "./components/PriceQuote";
import { Box, Typography, Grid, Hidden } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import BookingProgress from "./components/BookingProgress";
import MobileBookingProcess from "./components/MobileBookingProcess";
import PriceQuoteDialog from "./components/PriceQuoteDialog";

function App() {
  console.log("App Component Rendered");
  const [formData, setFormData] = React.useState(data);
  const updateFormData = (newData) => {
    setFormData(newData);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <ResponsiveAppBar />
        <Hidden mdUp>
          <BookingProgress formData={formData} />
          <PriceQuoteDialog
            formData={formData}
            updateFormData={updateFormData}
          />
        </Hidden>
        <Box sx={{ p: { xs: 2, sm: 2, md: 3, lg: 5 } }}>
          <Hidden mdDown>
            <Typography variant="h1" my={3}>
              Amphaul Booking
            </Typography>
          </Hidden>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{ order: { xs: 2, sm: 2, md: 1 } }}
            >
              <Hidden mdDown>
                <BookingProcess
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </Hidden>
              <Hidden mdUp>
                <MobileBookingProcess
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </Hidden>
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
              <Hidden mdDown>
                <Typography variant="body2">Your Progress</Typography>
                <Box py={2}>
                  <BookingProgress formData={formData} />
                </Box>
              </Hidden>
              <Hidden mdDown>
                <PriceQuote
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </Hidden>
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
