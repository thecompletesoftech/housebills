import React from "react";
import { Link } from "react-router-dom";
import pg15img1 from "../images/pg15img1.png";
import pg15img2 from "../images/pg15img2.png";

function StepFifteen() {
  return (
    <div>
      <section className="page15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h4>What shape roof do you have?</h4>
              <div className="radio-buttons">
                <label className="custom-radio">
                  <input type="radio" name="radio" checked />
                  <span className="radio-btn">
                    <i className="las la-check"></i>
                    <div className="property-img">
                      <img src={pg15img1} alt="" />
                      <h3>Peaked</h3>
                    </div>
                  </span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    <i className="las la-check"></i>
                    <div className="property-img">
                      <img src={pg15img2} alt="" />
                      <h3>Flat</h3>
                    </div>
                  </span>
                </label>

                <div className="button">
                  <Link to="/stepSixteen" id="btn2">
                    {" "}
                    Continue{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepFifteen;
