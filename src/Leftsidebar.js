import React from "react";
import { FileBarGraph,BarChart, Folder, BarChartSteps } from "react-bootstrap-icons";
import "./Leftsidebar.css";

function Leftsidebar() {
  return (
    <div className="Leftsidebar">
      <nav className="nav flex-column">
        <span className="text-white" href="#">
          Dashboard
        </span>
        <span className="text-white" href="#">
          <FileBarGraph color="white" size={15} className="icons" />
          All Dashboards
        </span>
        <span className="text-white" href="#">
          <BarChart color="white" size={15} className="icons" />
          Usage Analytics
        </span>
        <span className="text-white" href="#">
          <Folder color="white" size={15} className="icons" />
          Neratives
        </span>
        <span className="text-white" href="#">
          <Folder color="white" size={15} className="icons" />
          Other
        </span>
        <span className="text-white" href="#">
          <Folder color="white" size={15} className="icons" />
          Usage Analytics
        </span>
        <span className="text-white" href="#">
          <BarChartSteps color="white" size={15} className="icons" />
          Sample - Ecommerce
        </span>
        <span className="text-white" href="#">
          <BarChartSteps color="white" size={15} className="icons" />
          Total Sales
        </span>
        <span className="text-white" href="#">
          <BarChartSteps color="white" size={15} className="icons" />
          Lead Generation
        </span>
      </nav>
    </div>
  );
}

export default Leftsidebar;
