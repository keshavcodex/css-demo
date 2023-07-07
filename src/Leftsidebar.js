import React from "react";
import { FileBarGraph } from "react-bootstrap-icons";
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
      </nav>
    </div>
  );
}

export default Leftsidebar;
