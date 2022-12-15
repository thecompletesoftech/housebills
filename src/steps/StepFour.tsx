import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StepFour() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      console.log("heyyyyyyyyyyyyyy");
      navigate("/stepFive");
    }, 8000);
  }, []);
  return (
    <div>
      <section className="page4 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h3>
                {" "}
                <span> running quotes</span>
                <i className="fa fa-rotate-right"></i>
              </h3>
              <div className="map">
                <iframe
                  className="lmap"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepFour;
