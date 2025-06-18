import React from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
interface DashboardProps {

}
const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div>
      <Sidebar  />
      <Profile  />
    </div>
  );
};

export default Dashboard;
