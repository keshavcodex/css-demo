import React from "react";
import "./Rightsidebar.css";
import {
  ChevronDown,
  ThreeDotsVertical,
  Trash,
  Toggle2On,
  Check2Square,
  PlusLg,
  ChevronRight,
} from "react-bootstrap-icons";

function Rightsidebar() {
  return (
    <div className="Rightsidebar">
      <div className="header" id="filter-sec">
        <div>
          <span>Filters</span>
        </div>
        <div>
          <Check2Square color="white" size={15} id="filter-icon" />
          <PlusLg color="white" size={15} id="filter-icon" />
        </div>
      </div>

      {/* Country */}
      <div className="dropDown">
        <div className="header">
          <div>
            <ChevronDown color="white" size={15} className="icons tools" />
            <span> Country </span>
          </div>
          <div>
            <ThreeDotsVertical
              color="white"
              size={15}
              className="icons tools"
            />
          </div>
        </div>
        <div className="center">
          <ul class="list-group">
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="firstCheckbox">
                Start Typing to search...
              </label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label">Albania</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="firstCheckbox">
                Albania
              </label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="firstCheckbox">
                Albania
              </label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="firstCheckbox">
                Albania
              </label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="firstCheckbox">
                Albania
              </label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="firstCheckbox">
                Albania
              </label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-2" type="checkbox" value="" />
              <label class="form-check-label" for="firstCheckbox">
                Albania
              </label>
            </li>
          </ul>
        </div>
        <div className="footer">
          <Trash color="white" size={15} className="icons tools" />
          <Toggle2On color="white" size={15} className="icons tools" />
        </div>
      </div>
      {/* Sales revenue range */}

      <div className="dropDown">
        <div className="header">
          <div>
            <ChevronDown color="white" size={15} className="icons tools" />
            <span> Sales revenu range </span>
          </div>
          <div>
            <ThreeDotsVertical
              color="white"
              size={15}
              className="icons tools"
            />
          </div>
        </div>
        <div className="center">
          <ChevronRight color="grey" size={15} className="icons tools" />
          <input className="filter-input" type="number" value="00" />
          <label class="form-check-label" for="firstCheckbox" />
        </div>
        <div className="footer">
          <Trash color="white" size={15} className="icons tools" />
          <Toggle2On color="white" size={15} className="icons tools" />
        </div>
      </div>
      {/* Months in data */}
      <div className="dropDown">
        <div className="header">
          <div>
            <ChevronDown color="white" size={15} className="icons tools" />
            <span> Months in data </span>
          </div>
          <div>
            <ThreeDotsVertical
              color="white"
              size={15}
              className="icons tools"
            />
          </div>
        </div>
        <div className="center">
          <div className="filter-btn">
            <button
              type="button"
              className="btn btn-sm tools"
              style={{ backgroundColor: "#aa2661", color: "white" }}
            >
              06/2017
            </button>
            <button
              type="button"
              className="btn btn-sm tools"
              style={{ backgroundColor: "grey", color: "white" }}
            >
              06/2017
            </button>
          </div>
        </div>
        <div className="footer">
          <Trash color="white" size={15} className="icons tools" />
          <Toggle2On color="white" size={15} className="icons tools" />
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;
