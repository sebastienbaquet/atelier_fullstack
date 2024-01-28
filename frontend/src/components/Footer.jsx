import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaMotorcycle } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="socialCtn">
      <div className="social">
        <a
          aria-label="facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SlSocialFacebook className="socialIcon" />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialLinkedin className="socialIcon" />
        </a>
        <Link to="/">
          <FaMotorcycle className="socialIcon" />
        </Link>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialInstagram className="socialIcon" />
        </a>
        <a
          aria-label="twitter"
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialTwitter className="socialIcon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
