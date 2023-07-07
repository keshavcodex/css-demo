import React from "react";
import "./Navbar.css";
import { Bell, Person, CloudsFill } from "react-bootstrap-icons";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <span className="text-white" aria-current="page" href="#">
            <CloudsFill color="pink" size={20} className="icons"/>
          </span>
          <span className="text-white" href="#">
            Acme
          </span>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <span className="text-white" aria-current="page" href="#">
                  Data
                </span>
              </li>
              <li className="nav-item">
                <span className="text-white" aria-current="page" href="#">
                  Analytics
                </span>
              </li>
              <li className="nav-item">
                <span className="text-white" aria-current="page" href="#">
                  Pulse
                </span>
              </li>
              <li className="nav-item">
                <span className="text-white" aria-current="page" href="#">
                  Admin
                </span>
              </li>
            </ul>
          </div>
          <span className="text-white" aria-current="page" href="#">
            <Bell color="white" size={16} className="icons"/>
          </span>
          <span className="text-white" aria-current="page" href="#">
            <Person color="white" size={20} className="icons"/>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
