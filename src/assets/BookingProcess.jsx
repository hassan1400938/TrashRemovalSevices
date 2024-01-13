import * as React from "react";
import ChooseAService from "./accordion-components/ChooseAService";
import DateTime from "./accordion-components/PickUpDateTime";
import TaskDescription from "./accordion-components/TaskDescription";
import Frequency from "./accordion-components/Frequency";
import ReviewOrderAddress from "./accordion-components/ReviewOrderAddress";
import BookingStepper from "./BookingStepper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// import { ReplyRounded } from "@mui/icons-material";

export default function BookingProcess({
  formData,
  updateFormData,
}) {
  // console.log("BookingProcess Component Rendered");
  const [expanded, setExpanded] = React.useState("panel-services");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      {/* Pass the expanded state to BookingStepper */}
      <BookingStepper expanded={expanded} />
      <h2 className="form--service-title">
        {formData.data.price_quote.basic_services.service}
      </h2>
      {/* A#1 Pick a Service Accordion*/}
      <Accordion
        expanded={expanded === "panel-services"}
        onChange={handleChange("panel-services")}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" />
            </IconButton>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            What are you looking for?
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            {formData.data.price_quote.basic_services.service}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChooseAService formData={formData} updateFormData={updateFormData} />
        </AccordionDetails>
      </Accordion>

      {/* A#2 Date and Time Accordion*/}
      <Accordion
        expanded={expanded === "panel-date_time"}
        onChange={handleChange("panel-date_time")}
        // disabled={
        //   expanded !== "panel-services" ||
        //   formData.data.price_quote.postal_code === ""
        // }
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" />
            </IconButton>
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Date & Time
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {formData.data.price_quote.date_time.pickup_date}{" "}
            {formData.data.price_quote.date_time.pickup_time}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DateTime formData={formData} updateFormData={updateFormData} />
        </AccordionDetails>
      </Accordion>

      {/* A#3 Tasks accordion */}
      <Accordion
        expanded={expanded === "panel-tasks"}
        onChange={handleChange("panel-tasks")}
        // disabled={expanded !== "panel-date_time"}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" />
            </IconButton>
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Task Description
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {formData.data.price_quote.basic_services.vehicle_name}
            {/* {", "}{" "} */}
            {/* {formData.data.price_quote.tasks.addittional_items.length} item selected */}
            {/* No Coupon code */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TaskDescription
            formData={formData}
            updateFormData={updateFormData}
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
              <EditIcon fontSize="medium" />
            </IconButton>
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Frequency
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Single/Bundle
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Frequency />
        </AccordionDetails>
      </Accordion> */}

      {/* A#5 Review Order accordion */}
      <Accordion
        expanded={expanded === "panel-review-order"}
        onChange={handleChange("panel-review-order")}
        // disabled={expanded !== "panel-tasks"}
      >
        <AccordionSummary
          expandIcon={
            <IconButton aria-label="edit" size="small">
              <EditIcon fontSize="medium" />
            </IconButton>
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Review your order
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {formData.data.price_quote.postal_code}
            {formData.data.price_quote.address.company_name !== "" &&
              `, ${formData.data.price_quote.address.company_name}`}
            {formData.data.price_quote.address.pickup_address !== "" &&
              `, ${formData.data.price_quote.address.pickup_address}`}
            {formData.data.price_quote.address.apt_number !== "" &&
              `, ${formData.data.price_quote.address.apt_number}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReviewOrderAddress
            formData={formData}
            updateFormData={updateFormData}
          />
        </AccordionDetails>
      </Accordion>

      {/* A#6 Payment Accordion */}
      <Accordion
        expanded={expanded === "panel-payment"}
        onChange={handleChange("panel-payment")}
        // disabled={expanded !== "panel-review-order"}
      >
        <AccordionSummary aria-controls="panel6bh-content" id="panel6bh-header">
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Payment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
