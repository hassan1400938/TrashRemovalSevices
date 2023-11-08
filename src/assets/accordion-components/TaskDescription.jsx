import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Textarea from "@mui/joy/Textarea";

import AddItemDialog from "./AddItemDialog";

export default function TaskDescription(props) {
  const additionalItems = props.data.additional_items;
  // const addItemDialog = additionalItems.map(function (item, index) {
  //   return <AddItemDialog key={item.item_id} {...item} />;
  // });

  function addItem() {}
  return (
    <Box>
      <Box>
        <Typography variant="body1">
          Please select all of the items and the number of items that need to be
          removed for your booking
        </Typography>
        <Typography variant="body1" mt={2}>
          Please note, our providers will ONLY pick up the items that you
          selected and paid for.
        </Typography>
        <Typography variant="body1" mt={2}>
          If you have unlisted items, we will reach out to you for an updated
          price quote after reviewing your booking. If you do not agree with the
          final quote, we will refund you promptly, but please note there will
          be a 10% service fee.
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" mt={2}>
          Your provider will only collects items you have added here.
        </Typography>
        <AddItemDialog {...additionalItems} />
      </Box>
      <Box>
        <Typography variant="body1" mt={2}>
          Choose a vehicle
        </Typography>
        <Typography variant="body1" mt={2}>
          Make your best guess. We will review every order.
        </Typography>
        <Button variant="outlined" size="large">
          <Box>
            <Typography variant="body1" align="left">
              Pick-Up Truck
            </Typography>
            <Typography variant="body1" align="left">
              6 ft. long
            </Typography>
          </Box>
          <Typography>$79</Typography>
        </Button>
        <Button variant="outlined" size="large">
          <Box>
            <Typography variant="body1" align="left">
              Truck
            </Typography>
            <Typography variant="body1" align="left">
              8 ft. long
            </Typography>
          </Box>
          <Typography variant="body1">$99</Typography>
        </Button>
        <Box>
          <Typography variant="body1">Staris</Typography>
          <Typography variant="body1">
            Does the provider need to climb stairs?
          </Typography>
          <RadioGroup
            aria-labelledby="is-stairs-buttons-group"
            name="stairs-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
        <Box>
          <Typography variant="body1">Dismantling</Typography>
          <Typography variant="body1">
            Does one of your items require dismantling?
          </Typography>
          <RadioGroup
            aria-labelledby="is-stairs-buttons-group"
            name="stairs-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
        <Box>
          <Typography variant="body1">
            Please describe the items you need to remove
          </Typography>
          <Textarea
            placeholder='For example, "1x king-sized mattress that will be located inside the garage", "4x trash bags of food, cardboard, and general house trash will be located on the front lawn.
            
Note: Items you wish to be removed must be itemized and added to the dropdown list of "pickup type" above. If you cannot find an item from the dropdown list, please choose "unlisted" in the dropdown menu, and describe them in this box.'
          />
        </Box>
        <Typography variant="body1">Coupon Code</Typography>
        <Box row="true">
          <TextField
            id="outlined-basic"
            label="Enter a promo code"
            variant="outlined"
            placeholder="Enter a promo code"
          />
          <Button variant="outlined" size="large">
            Enter
          </Button>
        </Box>
        <Typography variant="body2">
          Need help? We are here for you! You can chat with us here.
        </Typography>
      </Box>
    </Box>
  );
}
