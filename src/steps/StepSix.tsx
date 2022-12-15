import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import wave from "../images/wave.png";

function StepSix() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("heyyyyyyyyyyyyyy");
      navigate("/stepSeven");
    }, 8000);
  }, []);
  return (
    <div>
      <section className="page6 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h3>
                {" "}
                <span> Checking flood risk</span>
                <i className="fa fa-rotate-right"></i>
              </h3>
              <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                  <div className="flood-risk">
                    <img src={wave} alt="" />
                    <p>Flood determination</p>
                    <h1>A E</h1>
                    <h5>High Risk Zone</h5>
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

export default StepSix;
