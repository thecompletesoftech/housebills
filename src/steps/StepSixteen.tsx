import React from "react";
import { Link } from "react-router-dom";
import alphastimg from "../images/alphastimg.png";
import woodimg from "../images/woodimg.jpg";
import slateroof from "../images/slateroof.png";
import rubberimg from "../images/rubberimg.png";
import concretetile from "../images/concretetile.png";
import solar from "../images/solar.png";
import tileroof from "../images/tileroof.png";
import targravel from "../images/tar&gravel.png";
import compositionshingle from "../images/compositionshingle.png";

function StepSixteen() {
  return (
    <section className="page16 header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <h4>What type of roof is on your home?</h4>
            <div className="radio-buttons">
              <label className="custom-radio">
                <input type="radio" name="radio" defaultChecked />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Asphalt</h3>
                    <img src={alphastimg} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Wood shingle</h3>
                    <img src={woodimg} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Slate roof</h3>
                    <img src={slateroof} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Rubber</h3>
                    <img src={rubberimg} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Concrete Tile</h3>
                    <img src={concretetile} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Solar</h3>
                    <img src={solar} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Tile roof</h3>
                    <img src={tileroof} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Tar &amp; Gravel</h3>
                    <img src={targravel} alt="" />
                  </div>
                </span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="radio" />
                <span className="radio-btn">
                  {/* <i class="las la-check"></i> */}
                  <div className="property-img">
                    <h3>Composition Shingle</h3>
                    <img src={compositionshingle} alt="" />
                  </div>
                </span>
              </label>
              <div className="button text-center">
                <Link to="/stepSeventeen" id="btn2">
                  {" "}
                  Continue{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepSixteen;
