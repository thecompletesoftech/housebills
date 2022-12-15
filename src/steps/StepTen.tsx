import { Link } from "react-router-dom";
import info from "../images/info.png";
import btnarrow from "../images/btnarrow.png";

const StepTen = () => {

  return (
    <>
      <div>
        <div className="container">
          <div className="row g-0">
            <div className="d-md-flex col-md-4 col-lg-6">
              <section className="page10 header">
                <div className="container">
                  <div className="coverage-head">
                    <h2>Coverage Profile</h2>
                    <p>Hover over each coverage to see what each coverage is. </p>
                  </div>
                  <div className="row d-block">
                    <div className="col">
                      <div className="dwelling">
                        <label>
                          {" "}
                          <span> Dwelling </span>
                          <img src={info} alt="" />
                          ......................................................................
                        </label>
                        <p>600,000</p>
                        <input
                          className="text-field"
                          type="text"
                          value=""
                          placeholder="$600,000"
                        />
                      </div>
                    </div>
                    <div className="col-md mt-3">
                      <div className="dwelling-extension d-flex">
                        <p>
                          {" "}
                          <span>Dwelling Extension </span>
                          <img src={info} alt="" />
                        </p>
                        <div className="wrapper">
                          <input type="radio" name="select" id="option-1" />
                          <input type="radio" name="select" id="option-2" />
                          <label htmlFor="option-1" className="option option-1">
                            <div className="dot"></div>
                            <span>25%</span>
                          </label>
                          <label htmlFor="option-2" className="option option-2">
                            <div className="dot"></div>
                            <span>50%</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="liability d-flex">
                        <p>
                          {" "}
                          <span>Liability</span>
                          <img src={info} alt="" />
                        </p>
                        <div className="liability-wrapper">
                          <input type="radio" name="liab" id="liability-1" />
                          <input type="radio" name="liab" id="liability-2" />
                          <input type="radio" name="liab" id="liability-3" />
                          <label htmlFor="liability-1" className="option option-1">
                            <div className="dot"></div>
                            <span>100,000</span>
                          </label>
                          <label htmlFor="liability-2" className="option option-2">
                            <div className="dot"></div>
                            <span>300,000</span>
                          </label>
                          <label htmlFor="liability-3" className="option option-3">
                            <div className="dot"></div>
                            <span>500,000</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md mt-3">
                      <div className="contents">
                        <label>
                          {" "}
                          <span> contents </span>
                          <img src={info} alt="" />
                          .........................................................................
                        </label>
                        <p>600,000</p>
                        <input
                          className="text-field"
                          type="text"
                          value=""
                          placeholder="$600,000"
                        />
                      </div>
                    </div>
                    <div className="col-md mt-4">
                      <div className="structure">
                        <label>
                          {" "}
                          <span> Other Structures </span>
                          <img src={info} alt="" />
                          .......................................................
                        </label>
                        <p>20,000</p>
                        <input
                          className="text-field"
                          type="text"
                          value=""
                          placeholder="$20,000"
                        />
                      </div>
                    </div>
                    <div className="col mt-3">
                      <div className="deductible d-flex">
                        <p>
                          {" "}
                          <span>Deductible</span>
                          <img src={info} alt="" />
                        </p>
                        <div className="deductible-wrapper">
                          <input type="radio" name="ded" id="deductible-1" />
                          <input type="radio" name="ded" id="deductible-2" />
                          <input type="radio" name="ded" id="deductible-3" />
                          <label htmlFor="deductible-1" className="option option-1">
                            <div className="dot"></div>
                            <span>1,000</span>
                          </label>
                          <label htmlFor="deductible-2" className="option option-2">
                            <div className="dot"></div>
                            <span>2,500</span>
                          </label>
                          <label htmlFor="deductible-3" className="option option-3">
                            <div className="dot"></div>
                            <span>5,000</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="coverages ">
                        <p>
                          {" "}
                          <span>Other Coverages:</span>
                          <img src={info} alt="" />
                        </p>
                        <div className="row">
                          <div className="col">
                            <input type="radio" name="cov" id="coverages-1" />
                            <input type="radio" name="cov" id="coverages-2" />
                            <input type="radio" name="cov" id="coverages-3" />
                            <input type="radio" name="cov" id="coverages-4" />
                            <input type="radio" name="cov" id="coverages-5" />
                            <label
                              htmlFor="coverages-1"
                              className="option option-1"
                            >
                              <div className="dot"></div>
                              <span>Sewer Line</span>
                            </label>
                            <label
                              htmlFor="coverages-2"
                              className="option option-2"
                            >
                              <div className="dot"></div>
                              <span>Sewer Line</span>
                            </label>
                            <label
                              htmlFor="coverages-3"
                              className="option option-3"
                            >
                              <div className="dot"></div>
                              <span>Sewer Line</span>
                            </label>
                            <label
                              htmlFor="coverages-4"
                              className="option option-4"
                            >
                              <div className="dot"></div>
                              <span>Equip Breakdown</span>
                            </label>
                            <label
                              htmlFor="coverages-5"
                              className="option option-5"
                            >
                              <div className="dot"></div>
                              <span>Sewer Line</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to="/stepEleven" className="btn">
                        {" "}
                        <span> Complete Your Quote </span>{" "}
                        <img src={btnarrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-8 col-lg-6">
              <div className="d-flex align-items-center mt-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-lg-12">

                      <div className="dean-st text-center justify-content-center" style={{
                          backgroundColor:'gray',
                          borderRadius:'10px'
                      }}>
                        <p
                          style={{ fontSize: "30px" }}
                          className="text-center"
                        >
                          303 Dean St
                        </p>
                        <div className="mt-3 w-fit justify-center mx-auto items-center flex" style={{
                          width: '150px',
                          height: '150px',
                          borderRadius: '150px',
                          border: '10px solid'
                        }}>
                          <div className="mx-10 py-4 text-center justify-items-center align-items-center">
                            <h5 className="text-center justify-items-center">$77</h5>
                            <hr className="solid mx-auto" style={{
                              width: '30px',
                              height: '5px'
                            }} />
                            <span className="m-auto">Month</span>
                            <p className="text-center justify-items-center">
                              <img src="images/info.png" alt="" />
                            </p>
                          </div>
                        </div>


                        <button type="submit" className="mt-3 mb-3 bg-white" style={{
                          borderRadius: '7px',

                        }}>
                          <div className="text-center">
                            <div className="flex items-center">
                              <div className="col text-center">
                                <Link to="/stepEleven" className="btn">
                                  {" "}
                                  <span> Complete Your Quote </span>{" "}
                                  <img src={btnarrow} alt="" style={{
                                      width:'20px',
                                      height:'20px'
                                  }}/>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </button>



                      </div>


                      <div className="dwelling-head px-20">
                        <label className="flex space-x-1 text-3xl text-gray-500 mt-3">
                          <span> Dwelling </span>
                        </label>
                        <p className="text-gray-500" style={{
                            fontSize:'12px'
                        }}>
                          Dwelling coverage will be your limit to repair your home
                          from losses such as fire, wind, hail and other catastrophic
                          claims.
                        </p>
                      </div>
                      
                      <br/>
                      <br/>
                      <br/>

                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                        </div>
                        <div className="carousel-inner ">
                          <div className="carousel-item active ">
                            <img
                                src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                                className="d-block w-50 justify-center items-center flex mx-auto"
                                alt="..."
                              />
                            
                          </div>
                          <div className="carousel-item ">
                            <img
                                src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                                className="d-block w-50 justify-center items-center flex mx-auto"
                                alt="..."
                              />
                           
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            aria-hidden="true"
                            style={{ color: "#626262", fontSize: "40px" }}
                          >
                            <i className="fa-solid fa-chevron-left"></i>
                          </span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            className=""
                            aria-hidden="true"
                            style={{ color: "#626262", fontSize: "40px" }}
                          >
                            <i className="fa-solid fa-chevron-right"></i>{" "}
                          </span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default StepTen;