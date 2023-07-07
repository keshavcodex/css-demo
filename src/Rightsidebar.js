import React from "react";
import { FileBarGraph } from "react-bootstrap-icons";
import "./Rightsidebar.css";

function Rightsidebar() {
  return (
    <div className="Rightsidebar">
      <nav className="nav flex-column">
        <span className="text-white" href="#">
          Filter
        </span>
        <span className="text-white" href="#">
          <FileBarGraph color="white" size={15} className="icons" />
          All Dashboards
        </span>
        <span className="text-white" href="#">
          Usage Analytics
        </span>
        <span className="text-white" href="#">
          Neratives
        </span>
        <span className="text-white" href="#">
          Other
        </span>
        <span className="text-white" href="#">
          Usage Analytics
        </span>
        <span className="text-white" href="#">
          Sample - Ecommerce
        </span>
        <span className="text-white" href="#">
          Total Sales
        </span>
        <span className="text-white" href="#">
          Lead Generation
        </span>
        <span className="text-white">Disabled</span>
      </nav>
    </div>
  );
}

export default Rightsidebar;
