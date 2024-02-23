import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="top text-center w-100">
            <h1 className="text-white">
              Hi, I’m <span>Swapnil Pawar</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " Backend Developer.",
                    " Full Stack Developer.",
                    " React Developer.",
                    " Angular Developer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-white">
              Innovative Front-End Developer and maintaining responsive
              websites. <br />
              Proficient in HTML, CSS, Bootstrap, JavaScript, Angular, Rest API,
              Java, Spring Boot, Microservices <br />
              Node Js, AWS and Nosql plus modern libraries and frameworks.
              Passionate about usability.
            </p>
            <h4 className="text-white">FIND ME</h4>
            <div className="button mt-5">
              <button className="btn-sh mr-4 mb-5 bg-primary">
                <a href="https://www.linkedin.com/in/swapnil-pawar-180a6b22b">
                  {" "}
                  <i class="fa fa-linkedin text-white"></i>
                </a>
              </button>
              <button className="btn-sh mr-4 bg-dark">
                <a href="https://github.com/pawarswapnil97">
                  <i class="fa fa-github text-white"></i>
                </a>
              </button>
              {/* <button className="btn-sh mr-4 bg-success">
                <a
                  href="https://wa.me/919766273575/?text=Hii, Whatsup !"
                  target="_blank"
                  class="google-plus"
                >
                  <i class="fa fa-whatsapp text-white"></i>{" "}
                </a>
              </button> */}
              <button className="btn-sh mr-4 mb-5 insta_icon ">
                <a href="https://www.instagram.com/swapnil_010_">
                  {" "}
                  <i class="fa fa-instagram"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
