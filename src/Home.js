import React from "react";
import Navbar from "./Navbar";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import Center from "./Center";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Leftsidebar />
      <Rightsidebar />
      <Center />
    </div>
  );
}

export default Home;
