import React from "react";
import { Link } from "react-router-dom";

function StepNinteen() {
  return (
    <div>
      <section className="page19 header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h4>
                What year (if any) have the following systems been updated?{" "}
              </h4>
              <div className="row justify-content-center mt-4">
                <div className="col-md-7 mt-4">
                  <form action="">
                    <label htmlFor="roof">roof</label>
                    <div className="select_box">
                      <select name="year" id="ddlYears" className=" roof">
                        <option selected disabled>
                          select
                        </option>
                        {(() => {
                          const options = [];

                          for (let i = 1970; i <= 2023; i++) {
                            options.push(<option value={i}>{i}</option>);
                          }

                          return options;
                        })()}
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-md-7 mt-3">
                  <form action="">
                    <label htmlFor="eletrical">eletrical system</label>
                    <div className="select_box">
                      <select
                        name="eletrical"
                        id="eletric"
                        className=" eletrical"
                      >
                        <option selected disabled>
                          select
                        </option>
                        {(() => {
                          const options = [];

                          for (let i = 1970; i <= 2023; i++) {
                            options.push(<option value={i}>{i}</option>);
                          }

                          return options;
                        })()}
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-md-7 mt-3">
                  <form action="">
                    <label htmlFor="eletrical">plumbing system</label>
                    <div className="select_box">
                      <select
                        name="plumbing"
                        id="plumbing"
                        className=" plumbing"
                      >
                        <option selected disabled>
                          select
                        </option>
                        {(() => {
                          const options = [];

                          for (let i = 1970; i <= 2023; i++) {
                            options.push(<option value={i}>{i}</option>);
                          }

                          return options;
                        })()}
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-md-7 mt-3">
                  <form action="">
                    <label htmlFor="eletrical">A/C system</label>
                    <div className="select_box">
                      <select name="ac" id="ac-system" className="ac">
                        <option selected disabled>
                          select
                        </option>
                        {(() => {
                          const options = [];

                          for (let i = 1970; i <= 2023; i++) {
                            options.push(<option value={i}>{i}</option>);
                          }

                          return options;
                        })()}
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4 mt-5 text-center">
                  <div className="button text-center ">
                    <a href="/stepTwenty" id="btn2">
                      {" "}
                      Continue{" "}
                    </a>
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

export default StepNinteen;
