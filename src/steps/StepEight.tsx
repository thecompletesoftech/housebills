import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StepEight() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("heyyyyyyyyyyyyyy");
      navigate("/stepNine");
    }, 8000);
  }, []);
  return (
    <div>
      <section className="page8 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <h3>
                {" "}
                <span> Checking Carriers Quotes</span>
                <i className="fa fa-rotate-right"></i>
              </h3>
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <div className="carriers-quotes">
                    <h4>
                      We'll have a price for <br /> you to review shortly.
                    </h4>
                    <p>
                      If you have a more time, you can complete our full <br />{" "}
                      online application to receive multiple quotes to compare.
                    </p>
                    <i className="fa fa-rotate-right"></i>
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

export default StepEight;
