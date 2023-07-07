import React from "react";
import Navbar from "./Navbar";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import Center from "./Center";
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="home-container">
        <Leftsidebar className="leftsidebar" />
        <Center className="center" />
        <Rightsidebar className="rightsidebar" />
      </div>
    </div>
  );
}

export default Home;
