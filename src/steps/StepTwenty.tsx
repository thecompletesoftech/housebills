import React from "react";
import { Link } from "react-router-dom";
import cactus from "../images/cactus.png";
import home from "../images/home (2).png";
import nationwide from "../images/nationwide.png";
import pg20travlimg from "../images/pg20travlimg.png";
import lemonade from "../images/lemonade.png";
import grange from "../images/grange logo.png";
import hippo from "../images/hippo.png";
import stillwater from "../images/stillwater.png";

function StepTwenty() {
  return (
    <div>
      <section className="page20">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row mt-4 ">
                <div className="col-md-2 text-start">
                  <div className="head-img">
                    <img src={cactus} alt="" />
                    <img src={home} alt="" />
                  </div>
                </div>
                <div className="col-md-4 mt-1 align-center">
                  <div className="heading">
                    <h3>Your Quotes: </h3>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="sort" id="navbarNavDarkDropdown">
                    <ul className="sort-list">
                      <li className="dropdown">
                        <Link
                          className=" dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Sort
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <Link className="dropdown-item" to="#">
                              Highest score
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Trending
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Data modified
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-5 nationwide">
                <div className="col-md-2">
                  <img src={nationwide} alt="" />
                </div>
                <div className="col-md-2 mt-1 text-end">
                  <h5>450k</h5>
                  <p>Dwelling</p>
                </div>
                <div className="col-md-1 mt-1 text-center">
                  <h5>1k</h5>
                  <p id="dwelling-1k">Deductible</p>
                </div>
                <div className="col-md-2 mt-1 text-start">
                  <h5>225k</h5>
                  <p>contents</p>
                </div>
                <div className="col-md-2 mt-4 text-center">
                  <h4>$933</h4>
                  <span>$107 /mo</span>
                </div>
                <div className="col-md-1 text-end">
                  <Link to="" className="btn">
                    GO
                  </Link>
                </div>
              </div>
              <div className="row  nationwide">
                <div className="col-md-2">
                  <img src={pg20travlimg} alt="" />
                </div>
                <div className="col-md-2 mt-1 text-end">
                  <h5>450k</h5>
                  <p>Dwelling</p>
                </div>
                <div className="col-md-1 mt-1 text-center">
                  <h5>1k</h5>
                  <p id="dwelling-1k">Deductible</p>
                </div>
                <div className="col-md-2 mt-1 text-start">
                  <h5>225k</h5>
                  <p>contents</p>
                </div>
                <div className="col-md-2 mt-4 text-start">
                  <h4 className="price">$1,332</h4>
                  <span>$107 /mo</span>
                </div>
                <div className="col-md-1 text-end">
                  <Link to="" className="btn">
                    GO
                  </Link>
                </div>
              </div>
              <div className="row  nationwide">
                <div className="col-md-2">
                  <img src={lemonade} alt="" />
                </div>
                <div className="col-md-2 mt-1 text-end">
                  <h5>450k</h5>
                  <p>Dwelling</p>
                </div>
                <div className="col-md-1 mt-1 text-center">
                  <h5>1k</h5>
                  <p id="dwelling-1k">Deductible</p>
                </div>
                <div className="col-md-2 mt-1 text-start">
                  <h5>225k</h5>
                  <p>contents</p>
                </div>
                <div className="col-md-2 mt-4 text-start">
                  <h4 className="price">$1,441</h4>
                  <span>$107 /mo</span>
                </div>
                <div className="col-md-1 text-end">
                  <Link to="" className="btn">
                    GO
                  </Link>
                </div>
              </div>
              <div className="row  nationwide">
                <div className="col-md-2">
                  <img src={grange} alt="" />
                </div>
                <div className="col-md-2 mt-1 text-end">
                  <h5>450k</h5>
                  <p>Dwelling</p>
                </div>
                <div className="col-md-1 mt-1 text-center">
                  <h5>1k</h5>
                  <p id="dwelling-1k">Deductible</p>
                </div>
                <div className="col-md-2 mt-1 text-start">
                  <h5>225k</h5>
                  <p>contents</p>
                </div>
                <div className="col-md-2 mt-4 text-start">
                  <h4 className="price">$1,450</h4>
                  <span>$107 /mo</span>
                </div>
                <div className="col-md-1 text-end">
                  <Link to="" className="btn">
                    GO
                  </Link>
                </div>
              </div>
              <div className="row  nationwide">
                <div className="col-md-2">
                  <img src={hippo} alt="" />
                </div>
                <div className="col-md-2 mt-1 text-end">
                  <h5>450k</h5>
                  <p>Dwelling</p>
                </div>
                <div className="col-md-1 mt-1 text-center">
                  <h5>1k</h5>
                  <p id="dwelling-1k">Deductible</p>
                </div>
                <div className="col-md-2 mt-1 text-start">
                  <h5>225k</h5>
                  <p>contents</p>
                </div>
                <div className="col-md-2 mt-4 text-start">
                  <h4 className="price">$1,550</h4>
                  <span>$107 /mo</span>
                </div>
                <div className="col-md-1 text-end">
                  <Link to="" className="btn">
                    GO
                  </Link>
                </div>
              </div>
              <div className="row  nationwide">
                <div className="col-md-2">
                  <img src={stillwater} alt="" />
                </div>
                <div className="col-md-2 mt-1 text-end">
                  <h5>450k</h5>
                  <p>Dwelling</p>
                </div>
                <div className="col-md-1 mt-1 text-center">
                  <h5>1k</h5>
                  <p id="dwelling-1k">Deductible</p>
                </div>
                <div className="col-md-2 mt-1 text-start">
                  <h5>225k</h5>
                  <p>contents</p>
                </div>
                <div className="col-md-2 mt-4 text-start">
                  <h4 className="price">$1,600</h4>
                  <span>$107 /mo</span>
                </div>
                <div className="col-md-1 text-end">
                  <Link to="" className="btn">
                    GO
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

export default StepTwenty;
