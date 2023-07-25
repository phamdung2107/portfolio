import React, { useState } from "react";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import Img from "../../assets/img/ava2.jpg";

const Home = () => {
  const { text } = useTypewriter({
    words: ["a Person", "a Front-end developer", "a Intern"],
    loop: 100,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  const [show, setShow] = useState(false);

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">Việt Dũng</div>
          <div className="navigation pxy__30 ">
            <ul className="navbar d__flex">
              <a href="#">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar" onClick={() => setShow(!show)}>
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar" onClick={() => setShow(!show)}>
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar" onClick={() => setShow(!show)}>
                  <a href="#Project">Project</a>
                </li>
                <li className="sideNavbar" onClick={() => setShow(!show)}>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="container d__flex align__items__center justify__content__space__around mt__130">
          <div className="home__content">
            <div className="home__meta relative">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Việt Dũng</h2>
              <h3 className="home__text sweet pz__10 absolute max-width__inherit">
                {text}
              </h3>
            </div>
          </div>
          <div className="home__imgBox">
            <img src={Img} alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
