import React from "react";
import { Link } from "react-router-dom";
import btnarrow from "../images/btnarrow.png";

function StepTwo() {
  return (
    <div>
      <section className="page2 header">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-6">
              <h1>Create household:</h1>

              <form className=" row gx-2 form-items justify-content-center d-flex mt-4">
                <div className="col-4 items">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="Fname"
                  />
                </div>
                <div className="col-4 items">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="Lname"
                  />
                </div>
                <div className="col-4 items">
                  <input
                    type="date"
                    className="form-date"
                    placeholder="DOB"
                    name="dob"
                  />
                </div>
              </form>

              <div className="row justify-content-center">
                <div>
                  <div className="tacbox">
                    <input id="checkbox" type="checkbox" />
                    <label htmlFor="checkbox">
                      {" "}
                      This application will run real home insurance qoutes based
                      on your information. Please check hre that you agree to{" "}
                      <a href="#" className="tandc">
                        terms and conditions
                      </a>
                      .{" "}
                      <a href="#" className="text-dark">
                        {" "}
                        <span> skip for now</span>
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="form-btn">
                    <Link to="/stepThree" className="btn btn-outline-dark">
                      Run Quotes <img src={btnarrow} alt="" className="arrow-btn"/>
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

export default StepTwo;
