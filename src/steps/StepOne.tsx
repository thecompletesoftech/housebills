import { Link } from "react-router-dom";
import Icon from "../images/mapicon.png";

function StepOne() {
  return (
    <div>
      <section className="page1 header">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-6">
              <h1>Home Insurance Bliss</h1>
              <p>
                Enter your address. Get Multiple quotes. Compare and Learn
                coverages Bind Online
              </p>
              <form action="">
                <span className="input-group-text">
                  <img src={Icon} alt="" />
                </span>
                <span className="address">address</span>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="what property do you need to insure?"
                  aria-label=""
                />
                <Link to="/stepTwo" className="btn bg-dark text-light">
                  run <br /> quotes{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepOne;
