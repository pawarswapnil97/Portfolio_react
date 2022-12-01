import React from "react"
import "./Resume.css"
const Resume = () => {
  return (
    <>
    <div className="container" id="resume">
      <div className="row w-100 p-3 mt-5">
        <div className="col-md-12 text-center">
          <h3 className="text-white">My Resume</h3>
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="text-warning text-center">Education Details</h4>
          <div className="card w-100 resume mt-3">
            <div className="card-body">
              <h5>BSC (Computer Science)</h5>
              <p>Savitribai Phule Pune University</p>
              <p>Ahmednagar College Ahmednagar</p>
              <p> * Jul 2019 - Oct 2022</p>
              <p>75.77 %</p>
            </div>
          </div>
          
          <div className="card w-100 resume mt-3">
            <div className="card-body">
              <h5>HSC</h5>
              <p>Maharashtra State Board</p>
              <p>Shri Arnyeshwar Junior College Arangaon</p>
              <p> * June 2017 - Apr 2019</p>
              <p>56.31 %</p>
            </div>
          </div>

          <div className="card w-100 resume mt-3">
            <div className="card-body">
              <h5>SSC</h5>
              <p>Maharashtra State Board</p>
              <p>Shri Arnyeshwar Vidhyalaya Arangaon</p>
              <p> * Jun 2017</p>
              <p>78.00 %</p>
            </div>
          </div>


        </div>

        
        <div className="col-md-6 mt-5">
          <h4 className="text-warning text-center">Exprience</h4>
          <div className="card workexp mt-4">
            <div className="card-body">
              <h5>Front-End Developer (Internship)</h5>
              <p>A2Z IT HUB PVT LTD <br/>
                 Jan 2022 - Aug 2022</p>
              <p> Worked with front end techenologys like HTML, CSS, Bootstrap, Javascript, React js<br/>
                  using this techenology design static and responsive website.<br/></p>
              
            </div>
          </div>
          <div className="card workexp mt-4">
            <div className="card-body">
              <h5>Edubrige Java FullStack (Training)</h5>
              <p>Jul 2022 - Dec 2022</p>
              <p> Work with java techenologys like Junit, Gradle, JDBC, Maven, Hibernate, Spring Boot & Microservices. <br/>
                  also done some project using this techenology .</p>
            </div>
          </div>
          <div className="card workexp mt-4">
            <div className="card-body">
              <h5>Skills</h5>
              <h6>Front End</h6>
              <p>HTML , CSS , Bootstrap , Javascript , Jquery , React JS , AJAX  & JSON  <br/>
                Java, Junit, Gradle, JDBC, Maven, Hibernate, Spring Boot, Microservices etc.</p>
              <h6>Back End</h6>
              <p>NODE JS & MYSQL etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Resume
