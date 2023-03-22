import React from "react";
import { Outlet } from "react-router-dom";

const Inventory = () => {
  return (
    <>
      <div>Inventory</div>
      <Outlet />
    </>
  );
};

export default Inventory;
