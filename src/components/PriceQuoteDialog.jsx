import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import PriceQuote from "./PriceQuote";

export default function PriceQuoteDialog({ formData, updateFormData }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        onClick={handleClickOpen}
        sx={{
          backgroundColor: theme.palette.primary.lightest,
          display: "flex",
          padding: 2,
          cursor: "pointer",
          position: "-webkit-sticky",
          position: "sticky",
          top: 4,
        }}>
        <Typography variant="subtitle1">Total</Typography>
        <Typography variant="subtitle1" flexGrow={1} textAlign="right">
          ${formData.data.price_quote.grand_total.toFixed(2)}
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
        fullWidth>
        <DialogContent sx={{ p: 0 }}>
          <PriceQuote formData={formData} updateFormData={updateFormData} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
