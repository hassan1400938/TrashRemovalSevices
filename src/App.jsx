import React from "react";
import { Outlet } from "react-router-dom";
function App() {
  console.log("App Component Rendered");

  return (
    <>
      <Outlet />
    </>
  );
}
export default React.memo(App);
