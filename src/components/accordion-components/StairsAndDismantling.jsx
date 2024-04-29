import React from "react";
import {
  Grid,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import StairsDismantlingNumberInput from "./StairsDismantlingNumberInput";

export default function StairsAndDismantling({ formData, updateFormData }) {
  // console.log("StairsAndDismantling.jsx rendered");
  const [
    stairsIndex,
    dismantlingIndex,
    totalStairsAmountKey,
    totalDismantlingAmountKey,
  ] = [0, 1, "total_amount", "total_amount"];

  //get default stairs and dismantling objects from data
  const stairs = formData.data.stairs_dismantling[stairsIndex];
  const dismantling = formData.data.stairs_dismantling[dismantlingIndex];

  const [isStairs, setIsStairs] = React.useState("no");
  const [needsDismantling, setNeedsDismantling] = React.useState("no");

  const handleStairsChange = (event) => {
    setIsStairs(event.target.value);
    if (event.target.value === "yes") {
      const totalStairAmount = 1 * stairs.price;
      handleStairsDismantlingQuantityChange(
        stairs,
        1,
        totalStairsAmountKey,
        totalStairAmount
      );
    } else if (event.target.value === "no") {
      //remove stairs
      removeStairsDismantlingArrayPQ(stairs.item_id);
    }
  };

  const handleDismantlingChange = (event) => {
    setNeedsDismantling(event.target.value);
    if (event.target.value === "yes") {
      const totalDismantlingAmount = 1 * dismantling.price;
      handleStairsDismantlingQuantityChange(
        dismantling,
        1,
        totalDismantlingAmountKey,
        totalDismantlingAmount
      );
    } else if (event.target.value === "no") {
      // remove dismantling
      removeStairsDismantlingArrayPQ(dismantling.item_id);
    }
  };
  //Change quantity of Stairs or Dismantling in Price_quote
  const handleStairsDismantlingQuantityChange = (
    defaultObj,
    quantity,
    totalObjAmountKey,
    totalAmount
  ) => {
    const existingItems = formData.data.price_quote.tasks.stairs_dismantling;

    // Check if the item with the same type (stairs/dismantling) already exists
    const existingItemIndex = existingItems.findIndex(
      (item) => item.item_id === defaultObj.item_id
    );

    // If the item exists, update it; otherwise, add a new item to the array
    const updatedItems =
      existingItemIndex !== -1
        ? [
            ...existingItems.slice(0, existingItemIndex),
            {
              ...existingItems[existingItemIndex],
              quantity: quantity,
              [totalObjAmountKey]: totalAmount,
            },
            ...existingItems.slice(existingItemIndex + 1),
          ]
        : [
            ...existingItems,
            {
              ...defaultObj,
              quantity: quantity,
              [totalObjAmountKey]: totalAmount,
            },
          ];

    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          tasks: {
            ...formData.data.price_quote.tasks,
            stairs_dismantling: updatedItems,
          },
        },
      },
    };
    updateFormData(updatedFormData);
    console.log(updatedFormData.data.price_quote);
  };
  //Remove Stairs or Dismantling from price_quote
  const removeStairsDismantlingArrayPQ = (itemId) => {
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          tasks: {
            ...formData.data.price_quote.tasks,
            stairs_dismantling:
              formData.data.price_quote.tasks.stairs_dismantling.filter(
                (item) => item.item_id !== itemId
              ),
          },
        },
      },
    };
    updateFormData(updatedFormData);
  };

  return (
    <Box my={2}>
      <Box>
        <Typography variant="subtitle1" my={2}>
          Stairs
        </Typography>
        <Typography variant="body1">
          Does the provider need to climb stairs?
        </Typography>

        <Grid container my={3} spacing={2} alignItems="center">
          <Grid item>
            <RadioGroup
              aria-labelledby="is-stairs-buttons-group"
              name="stairs-radio-buttons-group"
              value={isStairs}
              onChange={handleStairsChange}
            >
              <Box display="flex" alignItems="center">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </Box>
            </RadioGroup>
          </Grid>

          {/* Conditionally render StairsDismantlingNumberInput */}
          {isStairs === "yes" && (
            <Grid item>
              <StairsDismantlingNumberInput
                onQuantityPQChange={(newQuantity) => {
                  // Calculte amount accordingly
                  const totalStairsAmount = newQuantity * stairs.price;
                  handleStairsDismantlingQuantityChange(
                    stairs,
                    newQuantity,
                    totalStairsAmountKey,
                    totalStairsAmount
                  );
                }}
              />
              <Typography>
                x ${formData.data.stairs_dismantling[0].price} per flight.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
      {/* Dismantling */}
      <Box>
        <Typography variant="subtitle1" my={2}>
          Dismantling
        </Typography>
        <Typography variant="body1">
          Does one of your items require dismantling?
        </Typography>

        <Grid container my={3} spacing={2} alignItems="center">
          <Grid item>
            <RadioGroup
              aria-labelledby="needs-dismantling-buttons-group"
              name="dismantling-radio-buttons-group"
              value={needsDismantling}
              onChange={handleDismantlingChange}
            >
              <Box display="flex" alignItems="center">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </Box>
            </RadioGroup>
          </Grid>

          {/* Conditionally render StairsDismantlingNumberInput */}
          {needsDismantling === "yes" && (
            <Grid item>
              <StairsDismantlingNumberInput
                onQuantityPQChange={(newQuantity) => {
                  // Calculte amount accordingly
                  const totalDismantlingAmount =
                    newQuantity * dismantling.price;
                  handleStairsDismantlingQuantityChange(
                    dismantling,
                    newQuantity,
                    totalDismantlingAmountKey,
                    totalDismantlingAmount
                  );
                }}
              />
              <Typography>
                x ${formData.data.stairs_dismantling[dismantlingIndex].price}{" "}
                per item.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
