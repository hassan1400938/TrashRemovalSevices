// import React from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// // import { Box } from "@mui/material";
// import Typography from "@mui/material/Typography";

// export default function DateTime(children) {
//   return (
//     <div>
//       <Typography variant="body1">Pickup</Typography>
//       <Typography variant="body1" mt={2}>
//         Provider will arrive within half an hour of your selected time. Eg., if
//         you select 11 AM, provider will target to arrive between 10:30 - 11:30
//         AM.
//       </Typography>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         {children}
//       </LocalizationProvider>

//       {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker label="Controlled picker" />
//       </LocalizationProvider> */}
//     </div>
//   );
// }

import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function DateTime() {
  return (
    <Box>
      <Typography variant="body1">Pickup</Typography>
      <Typography variant="body1" mt={2}>
        Provider will arrive within half an hour of your selected time. Eg., if
        you select 11 AM, provider will target to arrive between 10:30 - 11:30
        AM.
      </Typography>
    </Box>
  );
}
