import React from "react";
import "./About.css";
import aboutImg from "../../assets/img/ava2.jpg";
import { Link } from "react-router-dom";
import file from "../../assets/pdf/Pham-Do-Viet-Dung-CV_TTS REACTJS.pdf";
const About = () => {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2 w40">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2 w60">
            <h1 className="about__heading">About Me</h1>
            <div className="border"></div>
            <div className="about__meta w90">
              <p className="about__text p__color">
                Hi, my name is Pham Do Viet Dung,a 4rd year student at the
                Phenikaa University. I am trying and looking forward to becoming
                a professional web developer
                <br />
                <br />
                Learning new languages and technologies is what I am passionate
                about. In addition, I am confident that I have ability to work
                effectively in a fast-paced environment with pressure.
              </p>
              <ul className="info-value">
                <li>
                  <i className="ti ti-agenda"></i>
                  <div>Age</div>
                  <div className="left">21</div>
                </li>
                <li>
                  <i className="ti ti-location-pin"></i>
                  <div>Location</div>
                  <div className="left">
                    <a
                      href="https://www.google.com/maps/place/Y%C3%AAn+Tr%E1%BB%8B,+%C3%9D+Y%C3%AAn,+Nam+%C4%90%E1%BB%8Bnh,+Vi%E1%BB%87t+Nam/@20.229368,106.0581397,14z/data=!4m13!1m7!3m6!1s0x313671501c23c5e9:0x46497151b9fcef03!2zWcOqbiBUcuG7iywgw50gWcOqbiwgTmFtIMSQ4buLbmgsIFZp4buHdCBOYW0!3b1!8m2!3d20.229368!4d106.0581397!3m4!1s0x313671501c23c5e9:0x46497151b9fcef03!8m2!3d20.229368!4d106.0581397"
                      target="_blank"
                    >
                      Nam Dinh, Viet Nam
                    </a>
                  </div>
                </li>
                <li>
                  <i className="ti ti-book"></i>
                  <div>Major</div>
                  <div className="left">Information Technology</div>
                </li>
              </ul>
              <div className="about__button d__flex align__items__center">
                <button className="about btn pointer">
                  <a href={file} target="_blank">
                    View Cv
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
