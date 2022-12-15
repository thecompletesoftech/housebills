import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StepFive() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("heyyyyyyyyyyyyyy");
      navigate("/stepSix");
    }, 8000);
  }, []);
  return (
    <div>
      <section className="page5 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h3>
                {" "}
                <span> Gathering data</span>
                <i className="fa fa-rotate-right"></i>
              </h3>
              <div className="house-data">
                <div className="content">
                  <h5>House Data Running</h5>
                  <p className="ifrmtion-content">
                    House Information <i className="fa fa-check"></i>
                  </p>
                  <p className="household-content">
                    Household Scores <i className="fa fa-rotate-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepFive;
