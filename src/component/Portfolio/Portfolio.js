import React from "react"
import "./Portfolio.css"
const Portfolio = () => {
  return (
    <>
    <div className="container-fluid" id='portfolio'>
      <div className="row w-100 p-4 text-white">
        <div className="col-md-12 text-center mt-5">
        <h3>Projects</h3>
        </div>

      <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://pawarswapnil97.github.io/Constraction/img1/why-1.png" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">Constraction Website</h5>
            <p>Technology Used : HTML, CSS and Bootstrap</p>
            <a href="https://pawarswapnil97.github.io/Constraction/"><button className="btn btn-outline-primary btn-sm">View Project</button></a>
          </div>
         </div>
        </div>

      <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://pawarswapnil97.github.io/SPDesigner/img/sblog1.jpg" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">SP Designer Website</h5>
            <p>Technology Used : HTML, CSS, Bootstrap and JS</p>
            <a href="https://pawarswapnil97.github.io/SPDesigner/"><button className="btn btn-outline-primary btn-sm">View Project</button></a>
          </div>
         </div>
        </div>

        <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://pawarswapnil97.github.io/SolarSystem/Assaet/img/g4.jpg" className="w-100 pimg"/>
            {/* <video src="https://pawarswapnil97.github.io/SolarSystem/Assaet/img/Video.mp4" autoplay="" muted="" playsinline="" loop="" class="w-100 shadow pimg"></video> */}
            <h5 className="text-dark mt-3">Solar System</h5>
            <p>Technology Used : HTML, CSS, Bootstrap and JS</p>
            <a href="https://pawarswapnil97.github.io/SolarSystem/"><button className="btn btn-outline-primary btn-sm">View Project</button></a>
          </div>
         </div>
        </div>

        <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://bootstrapmade.com/demo/templates/Flattern/assets/img/slide/slide-2.jpg" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">Flattern Website</h5>
            <p>Technology Used : HTML, CSS, Bootstrap</p>
            <a href="https://pawarswapnil97.github.io/FLATTERN/">
            <button className="btn btn-outline-primary btn-sm">View Project</button>
            </a>
          </div>
         </div>
        </div>

      


      <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://th.bing.com/th/id/OIP.UPEgw_uhKrlhXKHvjHx3egAAAA?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">Bank Application</h5>
            <p>Technology Used : Java <br/>
               Console base application </p>
            <a href=""><button className="btn btn-outline-primary btn-sm">View Project</button></a>
          </div>
         </div>
        </div>

        <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://th.bing.com/th/id/OIP.q-x7nePRtWPGw60MndGDEQHaEs?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">Stock Manegment System</h5>
            <p>Technology Used : Java & MySQL<br/>
               Manage stock for small organization.</p>
            <a href="https://pawarswapnil97.github.io/FLATTERN/">
            <button className="btn btn-outline-primary btn-sm">View Project</button>
            </a>
          </div>
         </div>
        </div>

        <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://t4.ftcdn.net/jpg/05/08/09/59/360_F_508095918_EfLZJilo2BaKaceKcYJQEpuRBVO0TMlt.jpg" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">Weather App</h5>
            <p>Technology Used : React JS and Bootstrap</p>
            <a href="https://pawarswapnil97.github.io/react-weather-app/"><button className="btn btn-outline-primary btn-sm">View Project</button></a>
          </div>
         </div>
        </div>

        <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-body p-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOrFIwQvfJAc4kSu29V6Zs2xvb8BWZ37o5eD8MKIShUwO2d2Qif4VfI7kQ1iWdrr2JuY&usqp=CAU" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">Live Crypto Price Tracker</h5>
            <p>Technology Used : React JS and Bootstrap</p>
            <a href="https://pawarswapnil97.github.io/Crypto/">
            <button className="btn btn-outline-primary btn-sm">View Project</button>
            </a>
          </div>
         </div>
        </div>

        {/* <div className="col-md-3 mt-3">
         <div className="card">
          <div className="card-body p-3">
            <img src="https://5.imimg.com/data5/VD/OI/MY-48795277/e-commerce-application-development-service-500x500.jpg" className="w-100 pimg"/>
            <h5 className="text-dark mt-3">E-Commerce Website</h5>
            <p>Technology Used : HTML,CSS and Bootstrap, Nodes And MySQL</p>
            <button className="btn btn-outline-primary btn-sm">View Project</button>
          </div>
         </div>
        </div> */}

        

      </div>
    </div>
    </>
  )
}

export default Portfolio
