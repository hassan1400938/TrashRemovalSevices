import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  Dialog,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

AddItemDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddItemDialog(props) {
  const { open, onClose, items } = props;
  let dataKeys = Object.keys(items);
  const handleClose = () => {
    onClose({});
  };

  const handleListItemClick = (item) => {
    onClose(item);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add Items to Pick Up</DialogTitle>
      <List sx={{ pt: 0, px: 2 }}>
        {dataKeys.map((key) => {
          let item = items[key];
          return (
            <ListItem disableGutters key={item.item_id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ListItemText primary={item.item_name} />
                <Button
                  size="small"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => handleListItemClick(item)}
                >
                  Add
                </Button>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
}
