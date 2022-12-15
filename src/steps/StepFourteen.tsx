import React from "react";
import { Link } from "react-router-dom";
import pg14img1 from "../images/pg14img1.png";
import pg14img2 from "../images/pg14img2.png";
import pg14img3 from "../images/pg14img3.png";

function StepFourteen() {
  return (
    <div>
      <section className="page14">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h4>What type of foundation does your property have?</h4>
              <div className="row">
                <div className=" col radio-buttons">
                  <label className="custom-radio custom-1">
                    <input type="radio" name="radio" checked />
                    <span className="radio-btn">
                      <div className="property-img">
                        <img src={pg14img1} alt="" />
                        {/* <p>Home on Slab</p> */}
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="radio" />
                    <span className="radio-btn">
                      <div className="property-img">
                        <img src={pg14img2} alt="" />
                        {/* <p>Home on Crawl Space</p> */}
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="radio" />
                    <span className="radio-btn">
                      <div className="property">
                        <img src={pg14img3} alt="" />
                        {/* <p>Home with Basement</p> */}
                      </div>
                    </span>
                  </label>
                  <div className="button text-center">
                    <Link to="/stepFifteen" id="btn2">
                      {" "}
                      Continue{" "}
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

export default StepFourteen;
