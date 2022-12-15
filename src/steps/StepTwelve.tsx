import React from "react";
import { Link } from "react-router-dom";
import pg12img1 from "../images/pg12img1.png";
import pg12img2 from "../images/pg12img2.png";
import pg12img3 from "../images/pg12img3.png";

function StepTwelve() {
  return (
    <div>
      <section className="page12 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h4>What type of function does your property have?</h4>
              <div className="radio-buttons text-center">
                <label className="custom property">
                  <input type="radio" name="radio" checked />
                  <span className="radio-btn">
                    <div className="custom-1">
                      <img src={pg12img1} alt="" />
                      <h3>Primary Home</h3>
                    </div>
                  </span>
                </label>
                <label className=" property">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    <div className="custom-2">
                      <img src={pg12img2} alt="" />
                      <h3>Second Home</h3>
                    </div>
                  </span>
                </label>
                <label className=" property">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    <div className="custom-3">
                      <img src={pg12img3} alt="" />
                      <h3>Rental Property</h3>
                    </div>
                  </span>
                </label>

                <div className="button">
                  <Link to="/stepFourteen" id="btn2">
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

export default StepTwelve;
