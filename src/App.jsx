import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  console.log("App Component Rendered");

  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}
export default React.memo(App);
