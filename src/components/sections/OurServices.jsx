import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function OurServices() {
  return (
    <Box sx={{ textAlign: "center", p: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4} mt={3}>
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
                <Typography variant="h3">Household Junk Removal</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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
                <Typography variant="h3">Household Junk Removal</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignIstems: "center",
              }}>
              <CardContent>
                <Typography variant="h3">Household Junk Removal</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Repeat similar card components for other services */}
        </Grid>
      </Container>
    </Box>
  );
}
