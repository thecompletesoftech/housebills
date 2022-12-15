import React from "react";
import { Link } from "react-router-dom";
import vinylsiding from "../images/vinylsiding.png";
import masonryvaneer from "../images/masonryvaneer.png";
import stucco from "../images/stucco.png";
import stone from "../images/stone.png";
function StepEighteen() {
  return (
    <div>
      <section className="page18 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h4>What type of exterior is your home?</h4>
              <div className="radio-buttons">
                <label className="custom-radio">
                  <input type="radio" name="radio" defaultChecked />
                  <span className="radio-btn">
                    {/* <i class="las la-check"></i> */}
                    <div className="property-img">
                      <h3>vinyl siding</h3>
                      <img src={vinylsiding} alt="" />
                    </div>
                  </span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    {/* <i class="las la-check"></i> */}
                    <div className="property-img">
                      <h3>masonry veneer</h3>
                      <img src={masonryvaneer} alt="" />
                    </div>
                  </span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    {/* <i class="las la-check"></i> */}
                    <div className="property-img">
                      <h3>stucco</h3>
                      <img src={stucco} alt="" />
                    </div>
                  </span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    {/* <i class="las la-check"></i> */}
                    <div className="property-img">
                      <h3>stone</h3>
                      <img src={stone} alt="" />
                    </div>
                  </span>
                </label>
                <div className="button text-center ">
                  <Link to="/stepNinteen" id="btn2">
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

export default StepEighteen;
