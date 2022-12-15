import React from "react";
import { Link } from "react-router-dom";
import speechBubble from "../images/speech-bubble.png";
import btnarrow from "../images/btnarrow.png";

function StepThree() {
  function onlyNumberKey(evt: any) {
    // Only ASCII character in that range allowed
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
  }
  return (
    <div>
      <section className="page3 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h4>How can we send you your quotes?</h4>
              <div className="row justify-content-center">
                <form
                  action=""
                  className="row d-block justify-content-center form-items"
                >
                  <div className="col-md-6 mt-3">
                    <div className="phone mt-3">
                      <span className="input-group-text" id="basic-addon1">
                        <img src={speechBubble} alt="" />
                      </span>

                      <input
                        className=""
                        type="tel"
                        onKeyPress={(event) => onlyNumberKey(event)}
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mail mt-3">
                      <span> @</span>
                      <input
                        className="email"
                        type="email"
                        name="email"
                        id=""
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="btn1 text-center">
                      <Link to="/stepFour" className="btn btn-outline-dark">
                        {" "}
                        Run Quotes <img src={btnarrow} alt="" className="arrow-btn"/>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepThree;
