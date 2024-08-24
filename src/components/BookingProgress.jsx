import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function BookingProgress({ formData }) {
  const formDisabled = formData.data.form_disabled;
  const [progress, setProgress] = React.useState();

  React.useEffect(() => {
    const stp = () => {
      switch (true) {
        case !formDisabled.pre_payment:
          return 80;
        case !formDisabled.review_order:
          return 60;
        case !formDisabled.tasks:
          return 40;
        case !formDisabled.date_time:
          return 20;
        case !formDisabled.choose_a_service:
          return 0;
        default:
          return 0;
      }
    };
    setProgress(stp);
  }, [formData.data.form_disabled]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
      }}>
      <LinearProgress
        sx={{
          minHeight: { xs: "2px", sm: "2px", md: "18px" },
          borderRadius: "5px",
          zIndex: 999,
        }}
        variant="determinate"
        value={progress}
      />
    </Box>
  );
}
