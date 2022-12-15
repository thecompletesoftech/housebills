import React from "react";
import { Link } from "react-router-dom";
import wind from "../images/wind.png";
import pg7icon from "../images/pg7icon.png";
import btnarrow from "../images/btnarrow.png";
function StepSeven() {
  return (
    <div>
      <section className="page7 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 ">
              <h3>
                {" "}
                <span> Checking claim history</span>
                <i className="fa fa-rotate-right"></i>
              </h3>
              <div className="row justify-content-center">
                <div className="col-md-6 ">
                  <div className="claim-history text-center">
                    <img src={wind} alt="" />
                    <h5>
                      {" "}
                      <span> Running CLUE Data</span>
                      <i className="fa fa-rotate-right"></i>
                    </h5>
                    <i className="fas fa-exclamation-triangle"></i>
                    <p>
                      Prior claims found. Click here to have an agent Reach out
                      to you after you complete your app!{" "}
                    </p>
                    <button className="btn">
                      {" "}
                      <span> Request </span>
                      <img src={pg7icon} alt="" />
                    </button>
                  </div>
                  <div className="continue-btn text-center">
                    <Link to="/stepEight" className="btn">
                      {" "}
                      <span> Continue </span> <img src={btnarrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepSeven;
