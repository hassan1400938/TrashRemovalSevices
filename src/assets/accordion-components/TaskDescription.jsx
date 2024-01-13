import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  TextareaAutosize,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import AddItemDialog from "./AddItemDialog";
import AdditonalItemsNumberInput from "./AdditonalItemsNumberInput";
import ChooseAVehicle from "./ChooseAVehicle";
import StairsAndDismantling from "./StairsAndDismantling";
import CouponCode from "./CouponCode";

export default function TaskDescription({ formData, updateFormData }) {
  const { additional_items, price_quote } = formData.data;

  // Extract items from formData.data.price_quote.tasks.additional_items
  const selectedItems = price_quote.tasks.additional_items;

  // Filter out items from additional_items that are already selected
  const additionalItems = additional_items.filter((item) => {
    // Check if the item is not in the selectedItems list
    return !selectedItems.some(
      (selectedItem) => selectedItem.item_id === item.item_id
    );
  });

  //For List selected Items
  const [dense, setDense] = React.useState(false);

  //For Choose a Item List Dialog
  const [openItemListDialog, setOpenItemListDialog] = React.useState(false);
  const handleClickOpenItemListDialog = () => {
    setOpenItemListDialog(true);
  };

  const handleItemListDialogClose = (item) => {
    try {
      if (!item || !item.item_id) {
        console.log("No item selected.");
        setOpenItemListDialog(false);
        return; // Skip updating the form data if no item is selected
      }

      // Set quantity to 1 and total_amount to item.price by default
      const newItem = {
        ...item,
        quantity: 1,
        total_amount: item.price,
      };

      console.log(item);
      setOpenItemListDialog(false);

      const updatedFormData = {
        ...formData,
        data: {
          ...formData.data,
          price_quote: {
            ...formData.data.price_quote,
            tasks: {
              ...formData.data.price_quote.tasks,
              additional_items: [
                ...formData.data.price_quote.tasks.additional_items,
                newItem,
              ],
            },
          },
        },
      };

      updateFormData(updatedFormData);
    } catch (error) {
      console.error("Error handling item selection:", error.message);
      // Handle the error, e.g., show a message to the user or log it
    }
  };
  ///End For Dialog

  //For Change item quantity
  const handleQuantityChange = (index, newQuantity) => {
    console.log("quantity: " + newQuantity);
    console.log("index: " + index);
    const updatedAdditionalItems =
      formData.data.price_quote.tasks.additional_items.map((item, i) => {
        if (i === index) {
          // Set newQuantity to 1 by default if it is undefined
          const quantity = newQuantity === undefined ? 1 : newQuantity;

          const totalAmount = quantity * item.price;
          return { ...item, quantity: quantity, total_amount: totalAmount };
        }
        return item;
      });

    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          tasks: {
            ...formData.data.price_quote.tasks,
            additional_items: updatedAdditionalItems,
          },
        },
      },
    };

    updateFormData(updatedFormData);
  };

  //Remove item from additional_items list in price qoute
  const removeItemFromList = (itemPQIndex) => {
    const updatedAdditionalItems = [
      ...formData.data.price_quote.tasks.additional_items,
    ];
    updatedAdditionalItems.splice(itemPQIndex, 1)[0];

    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          tasks: {
            ...formData.data.price_quote.tasks,
            additional_items: updatedAdditionalItems,
          },
        },
      },
    };
    updateFormData(updatedFormData);
  };
  //For change default vehical
  const changeDefaultVehicle = (vehicleName, vehiclePrice) => {
    const newData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          basic_services: {
            ...formData.data.price_quote.basic_services,
            vehicle_name: vehicleName,
            vehicle_price: vehiclePrice,
          },
        },
      },
    };
    // Check if the default vehicle has changed before updating the state
    const defaultVehicleChanged =
      formData.data.price_quote.basic_services.vehicle_name !== vehicleName ||
      formData.data.price_quote.basic_services.vehicle_price !== vehiclePrice;
    if (defaultVehicleChanged) {
      updateFormData(newData);
    }
  };
  //For Choose a Vehical
  const handleChooseAVehicleButtonClick = (vehicleName, vehiclePrice) => {
    console.log(vehicleName);
    const newData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          basic_services: {
            ...formData.data.price_quote.basic_services,
            vehicle_name: vehicleName,
            vehicle_price: vehiclePrice,
          },
        },
      },
    };
    updateFormData(newData);
  };
  //For Task Description Note
  const [taskDescriptionNote, setTaskDescriptionNote] = React.useState(
    formData.data.price_quote.tasks.task_description_note || ""
  );
  const handleTaskDescriptionNoteChange = (event) => {
    const newTaskDescriptionNote = event.target.value;
    setTaskDescriptionNote(newTaskDescriptionNote);

    // Update formData
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          tasks: {
            ...formData.data.price_quote.tasks,
            task_description_note: newTaskDescriptionNote,
          },
        },
      },
    };

    // Call your updateFormData function with the updated data
    updateFormData(updatedFormData);
  };

  //ForContinue Button
  function handleContinueClick() {
    console.log(formData.data.price_quote);
  }

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
        <Box>
          <List dense={dense}>
            {formData.data.price_quote.tasks.additional_items.map(
              (item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <AdditonalItemsNumberInput
                      itemPQIndex={index}
                      quantityPQ={item.quantity || 1}
                      onQuantityPQChange={(newQuantity) =>
                        handleQuantityChange(index, newQuantity)
                      }
                      removeItemFromList={removeItemFromList}
                    />
                  }
                >
                  <ListItemText primary={item.item_name} />
                  <ListItemText
                    primary={
                      item.price
                        ? `$${item.price.toFixed(2)}/each`
                        : "Price not available"
                    }
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
        {/* Open Dialog Button to choose Additional Items*/}
        <Button
          variant="outlined"
          endIcon={<AddCircleIcon />}
          onClick={handleClickOpenItemListDialog}
        >
          Add Item
        </Button>
        <AddItemDialog
          open={openItemListDialog}
          onClose={handleItemListDialogClose}
          items={{ ...additionalItems }}
        />
      </Box>
      <Box>
        <Typography variant="body1" mt={2}>
          Choose a vehicle
        </Typography>
        <Typography variant="body1" mt={2}>
          Make your best guess. We will review every order.
        </Typography>
        {/* Choose a vehicle buttons */}
        <ChooseAVehicle
          formData={formData}
          changeDefaultVehicle={changeDefaultVehicle}
          handleButtonClick={handleChooseAVehicleButtonClick}
        />
        {/*Stairs and Dismantling  */}
        <StairsAndDismantling
          formData={formData}
          updateFormData={updateFormData}
        />

        <Box>
          <Typography variant="body1">
            Please describe the items you need to remove
          </Typography>
          <TextareaAutosize
            style={{ width: "100%" }}
            aria-label="minimum height"
            minRows={7}
            placeholder='For example, "1x king-sized mattress that will be located inside the garage", "4x trash bags of food, cardboard, and general house trash will be located on the front lawn.
            
Note: Items you wish to be removed must be itemized and added to the dropdown list of "pickup type" above. If you cannot find an item from the dropdown list, please choose "unlisted" in the dropdown menu, and describe them in this box.'
            value={taskDescriptionNote}
            onChange={handleTaskDescriptionNoteChange}
          />
        </Box>
        {/* Coupon Code */}
        <CouponCode formData={formData} updateFormData={updateFormData} />
        <Typography variant="body2">
          Need help? We are here for you! You can chat with us here.
        </Typography>
        <Button variant="contained" size="large" onClick={handleContinueClick}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}
