import React from "react";
import { Link } from "react-router-dom";
import pg9head from "../images/pg9head.png";
import travelersimg from "../images/travelersimg.png";
import biceps from "../images/biceps.png";
import btnarrow from "../images/btnarrow.png";
function StepNine() {
  return (
    <div>
      <section className="page9 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h2>
                {" "}
                <span> express quote</span> <img src={pg9head} alt="" />
              </h2>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="express-quote text-center">
                    <div className="row d-block text-center">
                      <div className="col-md">
                        <div id="travelers-img">
                          <img src={travelersimg} alt="" />
                        </div>
                      </div>
                      <div className="col-md">
                        <p className="subheading">
                          Need a competitive policy quickly? We've quickly
                          analyzed <br /> several carriers and think this policy
                          would be a strong fit!
                        </p>
                      </div>
                      <div className="col-md">
                        <h3>
                          $ <span> 79</span>
                        </h3>
                        <hr className="solid" />
                        <h4>month</h4>
                      </div>
                      <div className="col-md mt-3">
                        <p>
                          <img src={biceps} alt="" />{" "}
                          <span>Coverage for your home!</span>{" "}
                        </p>
                        <Link to="" className="btn  text-light">
                          Go
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="express-btn text-center">
                    <p>or</p>
                    <Link to="/stepTen" className="btn">
                      {" "}
                      <span> Check More Comapnies </span>{" "}
                      <img src={btnarrow} alt="" />
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

export default StepNine;
