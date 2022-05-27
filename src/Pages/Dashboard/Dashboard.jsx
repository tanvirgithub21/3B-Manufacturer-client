import React from "react";
import { Outlet } from "react-router-dom";
import DashboardManu from "../../Common/DashboardManu";

const Dashboard = () => {
  return (
    <DashboardManu>
      <Outlet />
    </DashboardManu>
  );
};

export default Dashboard;
