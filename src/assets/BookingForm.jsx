import React from "react";
import BookingStepper from "./BookingStepper.jsx";
import ControlledAccordions from "./ControlledAccordions.jsx";
import formData from "../additionalItemsData.js";
export default function BookingForm() {
  return (
    <div className="booking-form">
      <BookingStepper />
      <h2 className="form--service-title">Booking Form Title: Service Name</h2>
      <ControlledAccordions {...formData} />
    </div>
  );
}
