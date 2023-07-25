import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsInstagram
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer d__flex align__items__center justify__content__center pz-10 flex__direction__column">
      <ul class="icon">
        <li>
          <a href="https://www.facebook.com/pdovdung" target="_blank">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <BsTwitter></BsTwitter>
          </a>
        </li>
        <li>
          <a href="#">
            <BsInstagram></BsInstagram>
          </a>
        </li>
        <li>
          <a href="#">
            <BsLinkedin></BsLinkedin>
          </a>
        </li>
        <li>
          <a href="#">
            <BsYoutube></BsYoutube>
          </a>
        </li>
        <li>
          <a href="https://github.com/phamdung2107" target="_blank">
            <BsGithub></BsGithub>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
