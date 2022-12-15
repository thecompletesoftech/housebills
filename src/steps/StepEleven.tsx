import React from "react";
import { Link } from "react-router-dom";

function StepEleven() {
  return (
    <div>
      <section className="page11 header">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-8">
              <h4>When do you want your policy to start?</h4>
              <div className="row justify-content-center">
                <div className="col-md mt-5 text-center">
                  <input type="date" name="date" placeholder="date" />

                  <hr />
                  <p>
                    if you're unsure of the start date, put the closest date and
                    we can change it any time
                  </p>
                </div>
                <div className="col-8-md mt-2">
                  <div className="policy-btn">
                    <Link to="" id="btn1">
                      {" "}
                      I don't know
                    </Link>
                    <Link to="/stepTwelve" id="btn2">
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

export default StepEleven;
