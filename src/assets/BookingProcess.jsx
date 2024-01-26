import * as React from "react";
import ChooseAService from "./accordion-components/ChooseAService";
import DateTime from "./accordion-components/PickUpDateTime";
import TaskDescription from "./accordion-components/TaskDescription";
import Frequency from "./accordion-components/Frequency";
import ReviewOrderAddress from "./accordion-components/ReviewOrderAddress";
import BookingStepper from "./BookingStepper";
import { Hidden } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PrePaymentCustomerInfo from "./accordion-components/PrePaymentCustomerInfo";

const CommonAccordionDetailsStyle = {
  px: 5,
  py: 2.5,
};

export default function BookingProcess({ formData, updateFormData }) {
  // console.log("BookingProcess.jsx Component Rendered");
  const [expanded, setExpanded] = React.useState("panel-services");
  const datePickerRef = React.useRef(null);
  const tasksRef = React.useRef(null);
  const reviewOrderRef = React.useRef(null);
  const paymentRef = React.useRef(null);

  const priceQuoteAddress = formData.data.price_quote.address;
  const isFormDisabled = formData.data.form_disabled;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleContinue = (panel, ref) => () => {
    setExpanded(panel);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Pass the expanded state to BookingStepper */}

      <BookingStepper expanded={expanded} />

      {expanded === "panel-services" && (
        <Typography variant="h2" sx={{ mb: 2 }}>
          {formData.data.price_quote.basic_services.service}
        </Typography>
      )}

      {/* <Hidden mdDown> */}
      {/* A#1 Pick a Service Accordion*/}
      <Accordion
        expanded={expanded === "panel-services"}
        onChange={handleChange("panel-services")}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" color="primary" />
            </IconButton>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {expanded !== "panel-services" && (
            <>
              <Typography variant="h4" sx={{ width: "50%", flexShrink: 0 }}>
                What are you looking for?
              </Typography>
              <Typography variant="body1">
                {formData.data.price_quote.basic_services.service}
              </Typography>
            </>
          )}
        </AccordionSummary>
        <AccordionDetails sx={CommonAccordionDetailsStyle}>
          <ChooseAService
            formData={formData}
            updateFormData={updateFormData}
            onContinue={handleContinue("panel-date_time", datePickerRef)}
          />
        </AccordionDetails>
      </Accordion>
      {/* A#2 Date and Time Accordion*/}
      <Accordion
        expanded={expanded === "panel-date_time"}
        onChange={handleChange("panel-date_time")}
        disabled={isFormDisabled.date_time}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" color="primary" />
            </IconButton>
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h4" sx={{ width: "50%", flexShrink: 0 }}>
            Date & Time
          </Typography>
          <Typography variant="body1">
            {formData.data.price_quote.date_time.pickup_date}{" "}
            {formData.data.price_quote.date_time.pickup_time}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={CommonAccordionDetailsStyle} ref={datePickerRef}>
          <DateTime
            formData={formData}
            updateFormData={updateFormData}
            onContinue={handleContinue("panel-tasks", tasksRef)}
          />
        </AccordionDetails>
      </Accordion>
      {/* A#3 Tasks accordion */}
      <Accordion
        expanded={expanded === "panel-tasks"}
        onChange={handleChange("panel-tasks")}
        disabled={isFormDisabled.tasks}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" color="primary" />
            </IconButton>
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h4" sx={{ width: "50%", flexShrink: 0 }}>
            Task Description
          </Typography>
          <Typography variant="body1">
            {formData.data.price_quote.basic_services.vehicle_name}
            {/* {", "}{" "} */}
            {/* {formData.data.price_quote.tasks.addittional_items.length} item selected */}
            {/* No Coupon code */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={CommonAccordionDetailsStyle}>
          <TaskDescription
            formData={formData}
            updateFormData={updateFormData}
            onContinue={handleContinue("panel-review-order", reviewOrderRef)}
          />
        </AccordionDetails>
      </Accordion>

      {/* A#4 Frequency Accordion
      <Accordion
        expanded={expanded === "panel-frequency"}
        onChange={handleChange("panel-frequency")}
        disabled={expanded !== "panel-tasks"}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" color="primary"/>
            </IconButton>
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h4" sx={{ width: "50%", flexShrink: 0 }}>
            Frequency
          </Typography>
          <Typography variant="boady1" sx={{ color: "text.secondary" }}>
            Single/Bundle
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={CommonAccordionDetailsStyle}>
          <Frequency />
        </AccordionDetails>
      </Accordion> */}

      {/* A#5 Review Order accordion */}
      <Accordion
        expanded={expanded === "panel-review-order"}
        onChange={handleChange("panel-review-order")}
        disabled={isFormDisabled.review_order}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" color="primary" />
            </IconButton>
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography variant="h4" sx={{ width: "50%", flexShrink: 0 }}>
            Review your order
          </Typography>
          <Typography variant="body1">
            {priceQuoteAddress.company_name &&
            (priceQuoteAddress.apt_number ||
              priceQuoteAddress.pickup_street_address) !== ""
              ? `${priceQuoteAddress.company_name}, `
              : `${priceQuoteAddress.company_name} `}

            {priceQuoteAddress.apt_number !== "" &&
              `${priceQuoteAddress.apt_number} `}

            {priceQuoteAddress.pickup_street_address &&
            priceQuoteAddress.postal_code !== ""
              ? `${priceQuoteAddress.pickup_street_address}, `
              : `${priceQuoteAddress.pickup_street_address} `}

            {priceQuoteAddress.postal_code !== "" &&
              `${priceQuoteAddress.postal_code}.`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={CommonAccordionDetailsStyle}>
          <ReviewOrderAddress
            formData={formData}
            updateFormData={updateFormData}
            onContinue={handleContinue("panel-payment", paymentRef)}
          />
        </AccordionDetails>
      </Accordion>

      {/* A#6 Payment Accordion */}
      <Accordion
        expanded={expanded === "panel-payment"}
        onChange={handleChange("panel-payment")}
        disabled={isFormDisabled.pre_payment}
      >
        <AccordionSummary aria-controls="panel6bh-content" id="panel6bh-header">
          <Typography variant="h4" sx={{ width: "50%", flexShrink: 0 }}>
            Payment
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={CommonAccordionDetailsStyle}>
          <PrePaymentCustomerInfo
            formData={formData}
            updateFormData={updateFormData}
          />
        </AccordionDetails>
      </Accordion>
      {/* </Hidden> */}
    </div>
  );
}
