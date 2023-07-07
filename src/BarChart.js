import React from "react";
import "./BarChart.css";

function BarChart() {
  return (
    <div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-success" style={{width: "14%"}}>
          14%
        </div>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-info text-dark" style={{width: "16%"}}>
          16%
        </div>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Warning example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-dark" style={{width: "80%"}}>
          80%
        </div>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Warning example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-warning text-dark" style={{width: "21%"}}>
          21%
        </div>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="info example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-danger" style={{width: "17%"}}>
          17%
        </div>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="dark example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-success" style={{width: "16%"}}>
          16%
        </div>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-dark" style={{width: "23%"}}>
          23%
        </div>
      </div>
    </div>
  );
}

export default BarChart;
