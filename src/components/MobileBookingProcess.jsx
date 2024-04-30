import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import ChooseAService from "./accordion-components/ChooseAService";
import DateTime from "./accordion-components/PickUpDateTime";
import TaskDescription from "./accordion-components/TaskDescription";
import ReviewOrderAddress from "./accordion-components/ReviewOrderAddress";
import PrePaymentCustomerInfo from "./accordion-components/PrePaymentCustomerInfo";

export default function MobileBookingProcess({ formData, updateFormData }) {
  const [currentStep, setCurrentStep] = useState("choose_a_service");

  const handleBackMobile = () => {
    if (currentStep !== "choose_a_service") {
      const steps = Object.keys(formData.data.form_disabled);
      const currentIndex = steps.indexOf(currentStep);
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleContinueMobile = () => {
    const steps = Object.keys(formData.data.form_disabled);
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      // Check if the next step is disabled
      const nextStep = steps[currentIndex + 1];
      if (!formData.data.form_disabled[nextStep]) {
        setCurrentStep(nextStep);
      } else {
        // Handle the case where the next step is disabled
        alert("Please complete the current step before proceeding.");
      }
    }
  };

  const isContinueButtonVisible = currentStep !== "pre_payment";
  const isBackButtonFullWidth = currentStep === "pre_payment";

  return (
    <>
      {/* Render components based on current step */}
      {currentStep === "choose_a_service" && (
        <ChooseAService formData={formData} updateFormData={updateFormData} />
      )}
      {currentStep === "date_time" && (
        <DateTime formData={formData} updateFormData={updateFormData} />
      )}
      {currentStep === "tasks" && (
        <TaskDescription formData={formData} updateFormData={updateFormData} />
      )}
      {currentStep === "review_order" && (
        <ReviewOrderAddress
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {currentStep === "pre_payment" && (
        <PrePaymentCustomerInfo
          formData={formData}
          updateFormData={updateFormData}
        />
      )}

      {/* Navigation buttons */}
      <Box sx={{ display: "flex", marginTop: 2 }}>
        <Button
          variant="outlined"
          sx={{
            width: isBackButtonFullWidth ? "100%" : "50%",
            marginRight: 0.5,
          }}
          size="large"
          onClick={handleBackMobile}>
          Back
        </Button>
        {isContinueButtonVisible && (
          <Button
            variant="contained"
            sx={{ width: "50%", marginLeft: 0.5 }}
            size="large"
            onClick={handleContinueMobile}>
            Continue
          </Button>
        )}
      </Box>
    </>
  );
}
