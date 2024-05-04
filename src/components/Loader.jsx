import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="loader">
      {/* Your loader animation */}
      <CircularProgress />
    </div>
  );
};

export default Loader;
