import React from "react";
import { Outlet } from "react-router-dom";

const Accounts = () => {
  return (
    <>
      <div>Accounts</div>
      <Outlet />
    </>
  );
};

export default Accounts;
