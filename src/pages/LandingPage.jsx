import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";

function LandingPage() {
  return (
    <div>
      {/* Header Section */}
      <header>{/* Header content goes here */}</header>

      {/* Hero Section */}
      <section sx={{ backgroundColor: "#f0f0f0", textAlign: "center", p: 4 }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Say Goodbye to Clutter!
          </Typography>
          <Typography variant="h5" paragraph>
            Reliable Trash Removal Service at Your Doorstep
          </Typography>
          <Button variant="contained" color="primary">
            Schedule Pickup
          </Button>
        </Container>
      </section>

      {/* Services Section */}
      <section sx={{ textAlign: "center", p: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {/* Dummy service cards */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <CardContent>
                  <Typography variant="h6">Household Junk Removal</Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Repeat similar card components for other services */}
          </Grid>
        </Container>
      </section>

      {/* How It Works Section */}
      <section>{/* How It Works content goes here */}</section>

      {/* Why Choose Us Section */}
      <section>{/* Why Choose Us content goes here */}</section>

      {/* About Us Section */}
      <section>{/* About Us content goes here */}</section>

      {/* Contact Section */}
      <section>{/* Contact content goes here */}</section>

      {/* Footer Section */}
      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
}

export default LandingPage;
