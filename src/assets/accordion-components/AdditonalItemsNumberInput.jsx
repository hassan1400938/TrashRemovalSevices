import React, { useState } from "react";
import { IconButton, Box, TextField } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ConfirmationDialog from "./ConfirmationDialog";
import { useTheme } from "@emotion/react";

const AdditonalItemsNumberInput = ({
  itemPQIndex,
  quantityPQ,
  onQuantityPQChange,
  removeItemFromList,
}) => {
  const theme = useTheme();

  const [quantity, setQuantity] = useState(quantityPQ);

  //For Confirmation Dialog
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleInputChange = (event) => {
    // Don't update the state when the user types manually
    if (
      event.type === "click" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      const newQuantity = parseInt(event.target.value, 10);
      onQuantityPQChange(newQuantity);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevQty) => prevQty + 1);
    onQuantityPQChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
      onQuantityPQChange(quantity - 1);
    } else {
      // If the quantity is 1 or less, show the confirmation dialog
      setOpenDialog(true);
    }
  };

  const handleRemoveItem = () => {
    setOpenDialog(false);
    // Call the function to remove the item from the list
    removeItemFromList(itemPQIndex);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    // Optionally, reset the quantity to 1 or take other actions
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton onClick={handleDecrement}>
        <RemoveCircleOutlineOutlinedIcon color="primary" />
      </IconButton>
      <TextField
        value={quantity}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
        readOnly
        size="small"
        inputProps={{
          style: {
            width: "15px",
            textAlign: "center",
            fontSize: "0.8em",
            backgroundColor: theme.palette.primary.lightest,
          },
          min: 1,
        }}
      />
      <IconButton onClick={handleIncrement}>
        <AddCircleOutlineOutlinedIcon color="primary" />
      </IconButton>
      <ConfirmationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleRemoveItem}
        title="Remove Item"
        content="Are you sure you want to remove this item from the list?"
      />
    </Box>
  );
};

export default AdditonalItemsNumberInput;
