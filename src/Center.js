import React from "react";
import "./Center.css";
import {
  InfoCircle,
  Pencil,
  Folder,
  ChevronDown,
  ThreeDotsVertical,
  Tv,
  Share,
  FiletypePdf,
  Brush,
  TextareaT,
} from "react-bootstrap-icons";
import GoogleChart from './GoogleChart';
import BarChart from './BarChart'

function Center() {
  return (
    <div className="Center">
      <div className="container-heading">
        <div className="box">
          <span className="heading">China</span>
          <span className="subheading ">|</span>
          <Folder color="grey" size={15} className="icons" />
          <span className="subheading ">Sales</span>
          <ChevronDown color="grey" size={15} className="icons" />
          <span className="subheading ">March 12th at 10:18AM</span>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-sm tools"
            style={{ backgroundColor: "#aa2661", color: "white" }}
            
          >
            +Widget
          </button>
          <TextareaT color="white" size={15} className="icons tools" />
          <Brush color="white" size={15} className="icons tools" />
          <FiletypePdf color="white" size={15} className="icons tools" />
          <Share color="white" size={15} className="icons tools" />
          <Tv color="white" size={15} className="icons tools" />
          <ThreeDotsVertical color="white" size={15} className="icons tools" />
        </div>
      </div>
      <div className="fig-container text-center">
        <div className="row">
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Total Revenue</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <div className="num-box">
                <span className="small-font">Total Revenue</span>
                <span className="number">14.48 M</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Total Quality</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <div className="num-box">
                <span className="small-font">Total Quality</span>
                <span className="number">32,386</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Total Sales</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <div className="num-box">
                <span className="small-font">Total Sales</span>
                <span className="number">26,774</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Total Brand</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <div className="num-box">
                <span className="small-font">Total Brand</span>
                <span className="number">752</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pie chart */}
      <div className="fig-container text-center">
        <div className="row">
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Age Range Breakdown</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <div className="chart-box">
                <div className="age-chart hollow">&nbps;</div>
                <div className="age-percent">
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "deepskyblue" }}></span>
                    <span>12% 0-18</span>
                  </div>
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "lightgreen" }}></span>
                  <span>18% 19-24</span>
                  </div>
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "#be6342" }}></span>
                  <span>07% 25-34</span>
                  </div>
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "#ca92f0" }}></span>
                  <span>21% 34-44</span>
                  </div>
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "#ecec58" }}></span>
                  <span>26% 44-54</span>
                  </div>
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "#FFFFFF" }}></span>
                  <span>18% 54-64</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Gender Breakdown</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <div className="chart-box" id="gender-box">
                <div className="gender-chart hollow">&nbps;</div>
                <div className="age-percent">
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "#ffc400" }}></span>
                    <span>86% Female</span>
                  </div>
                  <div className="percent-box">
                    <span className="dot" style={{ backgroundColor: "deepskyblue" }}></span>
                  <span>14% Male</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Age Gender Breakdown</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <div className="num-box">
              <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fig-container text-center">
        <div className="row">
          <div className="col">
            <div className="fig-box">
              <div className="name-box">
                <div>
                  <span>Age Range Breakdown</span>
                </div>
                <div>
                  <InfoCircle color="white" size={15} className="icons" />
                  <Pencil color="white" size={15} className="icons" />
                  <ThreeDotsVertical
                    color="white"
                    size={15}
                    className="icons"
                  />
                </div>
              </div>
              <GoogleChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;