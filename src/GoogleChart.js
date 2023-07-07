import React, { Component } from "react";
import Chart from "react-google-charts";
const data = [
  ["ID", "Salary", "Population"],
  ["Male", 8000, 340],
  ["Female", 49000, 890],
  ["Male", 56540, 120],
  ["Female", 13466, 600],
  ["Female", 48400, 500],
  ["Male", 27008, 230],
  ["Female", 20000, 210],
  ["Male", 10470, 950],
  ["Female", 42777, 800],
];
class GoogleChart extends Component {
// eslint-disable-next-line
  constructor(props) { 
    super(props);
  }
  render() {
    return (
      <div className="container mt-5">
        <Chart
          loader={<div>Loading Chart</div>}
          chartType="BubbleChart"
          data={data}
          options={{
            title:
              "",
            hAxis: { title: "", gridlines: {color: '#161e33'} },
            vAxis: { title: "", gridlines: {color: '#161e33'} },
            bubble: { textStyle:  {color: "white", fontSize: 15 } },
            colors: ["lightblue", "yellow"],
            backgroundColor: '#161e33'
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}
export default GoogleChart;
