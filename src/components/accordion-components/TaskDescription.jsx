import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddItemDialog from "./AddItemDialog";
import AdditonalItemsNumberInput from "./AdditonalItemsNumberInput";
import ChooseAVehicle from "./ChooseAVehicle";
import StairsAndDismantling from "./StairsAndDismantling";
// import CouponCode from "./CouponCode";
import { useTheme } from "@emotion/react";

export default function TaskDescription({
  formData,
  updateFormData,
  onContinue,
}) {
  const theme = useTheme();

  const { additional_items, price_quote } = formData.data;
  const selectedItems = price_quote.tasks.additional_items; //Selected items for price quote

  // Filter out items from additional_items that are already selected
  const additionalItems = additional_items.filter((item) => {
    // Check if the item is not in the selectedItems list
    return !selectedItems.some(
      (selectedItem) => selectedItem.item_id === item.item_id
    );
  });

  const [dense, setDense] = React.useState(false); //For List selected Items

  const [openItemListDialog, setOpenItemListDialog] = React.useState(false);
  const handleClickOpenItemListDialog = () => {
    setOpenItemListDialog(true);
  };

  const handleItemListDialogClose = (item) => {
    try {
      if (!item || !item.item_id) {
        // console.log("No item selected.");
        setOpenItemListDialog(false);
        return; // Skip updating the form data if no item is selected
      }
      // Set quantity to 1 and total_amount to item.price by default
      const newItem = {
        ...item,
        quantity: 1,
        total_amount: item.price,
      };

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
  const handleChooseAVehicleButtonClick = (vehicle) => {
    // Update vehicle selection
    const newData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          basic_services: {
            ...formData.data.price_quote.basic_services,
            vehicle_name: vehicle.name,
            vehicle_price: vehicle.price,
          },
        },
      },
    };
    updateFormData(newData);
  };

  //For Task Description Note
  const [taskDescriptionNote, setTaskDescriptionNote] = React.useState("");
  const [descNoteError, setDescNoteError] = React.useState(null);

  const handleTaskDescriptionNoteChange = (event) => {
    const newTaskDescriptionNote = event.target.value;
    setTaskDescriptionNote(newTaskDescriptionNote);

    event.target.validity.valid
      ? setDescNoteError(null)
      : setDescNoteError(true);
  };

  const tasksPQ = formData.data.price_quote.tasks;
  const vehiclePQ = formData.data.price_quote.basic_services.vehicle_name;
  React.useEffect(() => {
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        form_disabled: {
          ...formData.data.form_disabled,
          review_order:
            tasksPQ.additional_items.length !== 0 &&
            (tasksPQ.task_description_note && vehiclePQ) !== ""
              ? false
              : true, //
        },
      },
    };
    updateFormData(updatedFormData);
  }, [tasksPQ, vehiclePQ]);

  //For Continue Button
  function handleContinueClick() {
    !formData.data.form_disabled.review_order && onContinue();
  }

  return (
    <Box>
      <Box>
        <Typography variant="subtitle1">
          Please select all of the items and the number of items that need to be
          removed for your booking
        </Typography>
        <Typography variant="body1" my={2}>
          Please note, our providers will ONLY pick up the items that you
          selected and paid for.
        </Typography>
        <Typography variant="body1">
          If you have unlisted items, we will reach out to you for an updated
          price quote after reviewing your booking. If you do not agree with the
          final quote, we will refund you promptly, but please note there will
          be a 10% service fee.
        </Typography>
      </Box>
      <Box sx={{ width: "75%", mt: 3 }}>
        <Typography
          variant="body2"
          sx={{
            py: 0.5,
            px: 1,
            border: "none",
            borderRadius: 1,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          Your provider will only collects items you have added here.
        </Typography>
      </Box>
      {/* Add additionalItems */}
      <Box>
        <List dense={dense} sx={{ width: "75%" }}>
          {formData.data.price_quote.tasks.additional_items.map(
            (item, index) => (
              <ListItem
                sx={{
                  border: 1,
                  borderColor: theme.palette.primary.main,
                  borderRadius: 1,
                  my: 1,
                  fontSize: "0.8em",
                }}
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
                <ListItemText
                  primary={item.item_name}
                  sx={{ width: "40%", flexShrink: 0 }}
                />
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

        {/* Open Dialog Button to choose Additional Items*/}
        <Box sx={{ width: "75%" }}>
          <Button
            fullWidth
            variant="outlined"
            sx={{ minHeight: "60px" }}
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
      </Box>
      {/* Choose a vehical */}
      <Box my={2}>
        {/* Choose a vehicle buttons */}
        <ChooseAVehicle
          formData={formData}
          changeDefaultVehicle={changeDefaultVehicle}
          handleVehiclesSelection={handleChooseAVehicleButtonClick}
        />
      </Box>
      {/*Stairs and Dismantling  */}
      <StairsAndDismantling
        formData={formData}
        updateFormData={updateFormData}
      />
      {/* Description from user */}
      <Box my={2}>
        <Typography variant="subtitle1" mb={2}>
          Please describe the items you need to remove
        </Typography>
        <TextField
          required
          multiline
          minRows={5}
          sx={{ width: "75%", p: 3 }}
          placeholder='For example, "1x king-sized mattress that will be located inside the garage", "4x trash bags of food, cardboard, and general house trash will be located on the front lawn.
            
Note: Items you wish to be removed must be itemized and added to the dropdown list of "pickup type" above. If you cannot find an item from the dropdown list, please choose "unlisted" in the dropdown menu, and describe them in this box.'
          value={taskDescriptionNote}
          onChange={handleTaskDescriptionNoteChange}
          onBlur={() => {
            const updatedFormData = {
              ...formData,
              data: {
                ...formData.data,
                price_quote: {
                  ...formData.data.price_quote,
                  tasks: {
                    ...formData.data.price_quote.tasks,
                    task_description_note: taskDescriptionNote,
                  },
                },
              },
            };
            // Call your updateFormData function with the updated data
            updateFormData(updatedFormData);
          }}
          error={descNoteError}
          helperText={descNoteError ? "Write about your tasks" : ""}
        />
      </Box>
      {/* Coupon Code */}
      {/* <CouponCode formData={formData} updateFormData={updateFormData} /> */}

      <Typography variant="body2" my={2}>
        Need help? We are here for you! You can chat with us here.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" size="large" onClick={handleContinueClick}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}
