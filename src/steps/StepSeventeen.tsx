import React from "react";
import { Link } from "react-router-dom";
import woodframeimg from "../images/woodframeimg.png";
import solidbrickimg from "../images/solidbrickimg.png";
import concreteimg from "../images/concreteimg.png";
function StepSeventeen() {
  return (
    <div>
      <section className="page17 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h4>What construction type is your home?</h4>
              <div className="radio-buttons">
                <label className="custom-radio">
                  <input type="radio" name="radio" defaultChecked />
                  <span className="radio-btn">
                    {/* <i class="las la-check"></i> */}
                    <div className="construction-img">
                      <h3>Wood Frame</h3>
                      <img src={woodframeimg} alt="" />
                    </div>
                  </span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    {/* <i class="las la-check"></i> */}
                    <div className="construction-img">
                      <h3>Solid brick or stone</h3>
                      <img src={solidbrickimg} alt="" />
                    </div>
                  </span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="radio" />
                  <span className="radio-btn">
                    {/* <i class="las la-check"></i> */}
                    <div className="construction-img">
                      <h3>Concrete</h3>
                      <img src={concreteimg} alt="" />
                    </div>
                  </span>
                </label>
                <div className="button text-center">
                  <Link to="/stepEighteen" id="btn2">
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

export default StepSeventeen;
