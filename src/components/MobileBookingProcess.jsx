import React from "react";
import ChooseAService from "./accordion-components/ChooseAService";

export default function MobileBookingProcess({ formData, updateFormData }) {
  const handleContinue = (panel) => () => {
    // setExpanded(panel);
    // ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChooseAService
      formData={formData}
      updateFormData={updateFormData}
      onContinue={handleContinue("panel-date_time")}
    />
  );
}
