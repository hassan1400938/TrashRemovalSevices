import React from "react";
import BookingStepper from "./BookingStepper";
import ControlledAccordions from "./ControlledAccordions";
import formData from "./formData.js";
export default function BookingForm() {
  console.log(formData);
  return (
    <div className="booking-form">
      <BookingStepper />
      <h2 className="form--service-title">Booking Form Title: Service Name</h2>
      <ControlledAccordions {...formData} />
    </div>
  );
}
