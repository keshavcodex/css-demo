import React from "react";
import "./Center.css";

function Center() {
  return (
    <div className="Center">
      <div className="container-heading">
        <div className="box">
          <span className="heading">China</span>
          <span className="subheading ">|</span>
          <span className="subheading ">Sales</span>
          <span className="subheading ">March 12th at 10:18AM</span>
        </div>
        <div>
          <button className="subheading ">+widget</button>
          <span className="subheading ">T</span>
          <span className="subheading ">B</span>
          <span className="subheading ">pdf</span>
          <span className="subheading ">share</span>
          <span className="subheading ">cast</span>
          <span className="subheading ">:</span>
        </div>
      </div>
      {/* <div className="fig-container">
        <div className="fig-box">
          <span className="name-box">Total revenue</span>
          <span className="num-box">14.48 M</span>
        </div>
      </div> */}
      <div class="fig-container text-center">
        <div class="row">
          <div class="col">
            <div className="fig-box">
              <div className="name-box">
                <span>Total revenue</span>
                <span>i</span>
                <span>p</span>
                <span>:</span>
              </div>
              <span className="num-box">14.48 M</span>
            </div>
          </div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
}

export default Center;
