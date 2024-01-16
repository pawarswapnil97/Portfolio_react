import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="features">
        <div className="container">
          <div className="row w-100 justify-content-center">
            <div className="col-md-5 text-center mt-5">
              <h3 className="text-white text-center">About</h3>
              <table className="w-100">
                <tr>
                  <td>
                    <i className="fa fa-user mr-3 "></i>
                  </td>
                  <td>
                    <h6> Pawar Swapnil </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-envelope mr-3"></i>{" "}
                  </td>
                  <td>
                    <h6>pawarswapnil0579@gmail.com</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-phone mr-3"></i>
                  </td>
                  <td>
                    <h6> 9766273575</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-calendar mr-3"></i>{" "}
                  </td>
                  <td>
                    {" "}
                    <h6> 25 June 2001</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-book mr-3"></i>{" "}
                  </td>
                  <td>
                    {" "}
                    <h6>Master of Computer Science</h6>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
