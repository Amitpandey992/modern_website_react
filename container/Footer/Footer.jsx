import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { /*FooterOverlay,*/ Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext"> Contact Us</h1>
        <p className="p__opensans">9w 53rd st, New York NY10019, USA</p>
        <p className="p__opensans">+1 9340989006</p>
        <p className="p__opensans">+1 7869046641</p>
      </div>
      <div className="app__footer-links_logo">
        <img
          src={images.gericht}
          alt="footer.css"
          className="footer__main_logo"
        />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the servies of
          others.
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext"> Working hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">8:00 Am - 12:00 Am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">7:00 Am - 11:00 Am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">@2023 gericht by Amit Pandey.All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
