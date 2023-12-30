import React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import data from "./data";
import BookingProcess from "./assets/BookingProcess";
import PriceQuote from "./assets/PriceQuote";

function App() {
  console.log("App Component Rendered");
  const [formData, setFormData] = React.useState(data);
  const updateFormData = (newData) => {
    setFormData(newData);
  };
  return (
    <React.Fragment>
      <div className="booking--container">
        <h1 className="booking--title">Booking Page Title Here</h1>
        <Grid container spacing={2} className="mui-grid">
          <Grid item xs={8} className="mui-grid--booking-form">
            <BookingProcess
              formData={formData}
              updateFormData={updateFormData}
            />
          </Grid>
          <Grid item xs={4}>
            <PriceQuote formData={formData} updateFormData={updateFormData} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
export default React.memo(App);
