import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faEnvelope,
  faHome,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="box">
        <img src="images/logo.png" alt="" />
        <div className="address">
          <p className="info">
            <FontAwesomeIcon className="icon" icon={faHome} />
            <span>No: 58 A, East Madison Street, Baltimore, Bangladesh.</span>
          </p>

          <p className="info">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <span>+0000 1234 56789</span>
          </p>

          <p className="info">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <span style={{ textTransform: "none" }}>majedul393@gmail.com</span>
          </p>
        </div>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </div>
      </div>
      <div className="box">
        <h3>help</h3>
        <p className="link">
          search <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Help <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Information <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Privacy Policy{" "}
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Shipping Information{" "}
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
      </div>

      <div className="box">
        <h3>support</h3>
        <p className="link">
          Contact <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          About Us <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Carrers <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Refund & Returns{" "}
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Deliveries <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
      </div>
      <div className="box">
        <h3>Information</h3>
        <p className="link">
          Search Terms <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Advanced Search{" "}
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Helps & Faqs <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Store Location{" "}
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
        <p className="link">
          Orders & Returns{" "}
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
