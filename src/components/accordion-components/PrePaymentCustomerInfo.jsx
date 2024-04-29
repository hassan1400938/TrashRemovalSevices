import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { IMaskInput } from "react-imask";
import StripePaymentDialog from "../StripePaymentDialog";

export default function PrePaymentCustomerInfo({ formData, updateFormData }) {
  const [formFields, setFormFields] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [mobile, setMobile] = React.useState("");

  const [firstNameError, setFirstNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  React.useEffect(() => {
    const mobileMask = IMask(document.getElementById("mobile-input"), {
      mask: "(000) 000-0000", // You can customize the mask as needed
    });

    return () => {
      mobileMask.destroy();
    };
  }, []);

  const handleOnChange = (field, value) => {
    // Update formFields with the entered customer details
    const updatedFormFields = {
      ...formFields,
      [field]: value,
    };

    // Update the state with the new formFields
    setFormFields(updatedFormFields);

    // Update formData with the entered address details
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          customer: {
            ...formData.data.price_quote.customer,
            ...updatedFormFields,
          },
        },
      },
    };

    // Call the function to update the formData
    updateFormData(updatedFormData);
  };

  return (
    <Box>
      <Typography variant="body1">
        Enter the following information to process your payment with{" "}
        <Box component="span" fontWeight="700">
          Stripe.
        </Box>
      </Typography>

      {/*Fields */}
      <Box my={3}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            // sx={{ order: { xs: 2, sm: 2, md: 1 } }}
          >
            <TextField
              required
              fullWidth
              name="first-name"
              sx={{ mb: 2 }}
              label="First Name"
              variant="outlined"
              value={formFields.firstName}
              onChange={(e) => {
                setFormFields({ ...formFields, firstName: e.target.value });
                e.target.validity.valid
                  ? setFirstNameError(false)
                  : setFirstNameError(true);
              }}
              onBlur={() => {
                handleOnChange("first_name", formFields.firstName);
              }}
              error={firstNameError}
              helperText={firstNameError ? "You must enter a name" : ""}
            />
            <TextField
              fullWidth
              name="last-name"
              label="Last Name"
              variant="outlined"
              value={formFields.lastName}
              onChange={(e) =>
                setFormFields({ ...formFields, lastName: e.target.value })
              }
              onBlur={() => {
                handleOnChange("last_name", formFields.lastName);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: 2 }}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              value={formFields.email}
              onChange={(e) => {
                setFormFields({ ...formFields, email: e.target.value });
                e.target.validity.valid
                  ? setEmailError(false)
                  : setEmailError(true);
              }}
              onBlur={() => {
                handleOnChange("email", formFields.email);
              }}
              error={emailError}
              helperText={emailError ? "A valid email address is required" : ""}
            />
            <TextField
              fullWidth
              //   sx={{ mb: 2 }}
              id="mobile-input"
              label="Mobile"
              variant="outlined"
              value={formFields.mobile}
              placeholder="(555) 555-5555"
              onChange={(e) =>
                setFormFields({ ...formFields, mobile: e.target.value })
              }
              onBlur={() => {
                handleOnChange("mobile", formFields.mobile);
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <StripePaymentDialog formData={formData} />
      </Box>
    </Box>
  );
}
