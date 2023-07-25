import React from "react";
import "./Project.css";
import Pro1 from "../../assets/img/project1.png";
import Pro2 from "../../assets/img/project2.png";
import Pro3 from "../../assets/img/project3.png";
import Pro4 from "../../assets/img/pro1.jpg";

const Project = () => {
  return (
    <div className="blog component__space " id="Project">
      <div className="heading text__align__center">
        <h1 className="heading">My project</h1>
        <p className="p__color">These are my projects</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">App ecommerce</h5>
                <h4 className="project__text">
                  ReactJs . Material-ui . Recharts
                </h4>
                <a
                  href="https://mern-shop-app.onrender.com/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Devcare</h5>
                <h4 className="project__text">
                  ReactJs Webcam Chartjs Tensorflow-models
                </h4>
                <a
                  href="https://it-dev.vercel.app/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Dashboard</h5>
                <h4 className="project__text">
                  ReactJs . Material-ui . Recharts
                </h4>
                <a
                  href="https://dashboard-ui-5c8g.onrender.com/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Keyboard</h5>
                <h4 className="project__text">ReactJs</h4>
                <a
                  href="https://keyboard-test.onrender.com/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
