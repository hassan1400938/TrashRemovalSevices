import * as React from "react";

import ChooseAService from "./accordion-components/ChooseAService";
import DateTime from "./accordion-components/PickUpDateTime";
import TaskDescription from "./accordion-components/TaskDescription";
import Frequency from "./accordion-components/Frequency";
import ReviewOrderAddress from "./accordion-components/ReviewOrderAddress";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState("panel-services");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
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
            Service Name
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* choose a service form inputs */}
          <ChooseAService />
          <Button variant="contained" size="large">
            Continue
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-date_time"}
        onChange={handleChange("panel-date_time")}
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
            Pickup: 9-10-1212 11:30 AM
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DateTime />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-tasks"}
        onChange={handleChange("panel-tasks")}
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
            Truck, 1 item selected, No Coupon code
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TaskDescription {...props} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-frequency"}
        onChange={handleChange("panel-frequency")}
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
      </Accordion>
      <Accordion
        expanded={expanded === "panel-review-order"}
        onChange={handleChange("panel-review-order")}
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
            Review your order
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Address will be here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReviewOrderAddress />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-payment"}
        onChange={handleChange("panel-payment")}
        disabled
      >
        <AccordionSummary aria-controls="panel4bh-content" id="panel4bh-header">
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
}
