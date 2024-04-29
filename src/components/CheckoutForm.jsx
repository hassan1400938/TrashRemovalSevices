import { Button, Box } from "@mui/material";
import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
      <Box my={2}>
        <PaymentElement />
      </Box>
      <Button variant="contained">Submit</Button>
    </form>
  );
};

export default CheckoutForm;
