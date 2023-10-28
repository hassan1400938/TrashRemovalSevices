import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ChooseAService from "./ChooseAService";
import DateTime from "./PickUpDateTime";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

export default function ControlledAccordions(props) {
  const order = props.data.price_quote;
  console.log(order);

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
          <Button variant="contained" size="large" justify-content>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Task Description
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Truck, 1 item selected, No Coupon code
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Frequency
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Single/Bundle
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Review your order
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Address will be here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-payment"}
        onChange={handleChange("panel-payment")}
        disabled
      >
        <AccordionSummary aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Payment</Typography>
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
