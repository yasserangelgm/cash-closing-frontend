import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const DashLayout = () => {
  return (
    <>
      <div className="dashboard-container">
        <Outlet />
      </div>
    </>
  );
};

export default DashLayout;
