import React from "react";
import BookingProcess from "../components/BookingProcess";
import PriceQuote from "../components/PriceQuote";
import { Box, Typography, Grid, Hidden, Link } from "@mui/material";
import BookingProgress from "../components/BookingProgress";
import MobileBookingProcess from "../components/MobileBookingProcess";
import PriceQuoteDialog from "../components/PriceQuoteDialog";
import Loader from "../components/Loader";

import data from "../data";

export default function Booking() {
  const [formData, setFormData] = React.useState(data);
  const updateFormData = (newData) => {
    setFormData(newData);
  };
  //For Loading...
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.Fragment>
      <div className="app">
        {loading ? (
          <Loader />
        ) : (
          <Box
            sx={{
              minHeight: "100vh",
            }}>
            <Hidden mdUp>
              <Box
                sx={{
                  position: { xs: "-webkit-sticky", sm: "-webkit-sticky" },
                  position: { xs: "sticky", sm: "sticky" },
                  top: { xs: 0, sm: 0 },
                }}>
                <BookingProgress formData={formData} />
              </Box>
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
                  sx={{ order: { xs: 2, sm: 2, md: 1 } }}>
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
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                  <Box>
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
                  </Box>
                  {console.log(formData.data.price_quote)}
                  {console.log(formData.data.form_disabled)}
                </Grid>
              </Grid>

              <Box>
                <Typography
                  sx={{
                    mt: 3,
                    fontSize: "0.8em",
                    textAlign: "center",
                  }}
                  variant="body2">
                  Powered by{" "}
                  <Link
                    href="https://rixosol.com"
                    underline="hover"
                    target="_blank">
                    Rixosol
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </div>
    </React.Fragment>
  );
}
