import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Orlando, FL</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              denirodumasdev@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Bio</h4>
          <p>Your destiny is moving at the speed of your obedience.</p>
          <div className="social">
            <a
              href={"https://www.facebook.com/deniro.dumas.7/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook
                size={30}
                style={{ color: "#73bbdb", marginRight: "1rem" }}
              />
            </a>
            <a
              href={"https://twitter.com/_promethan"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter
                size={30}
                style={{ color: "#ca5c4b", marginRight: "1rem" }}
              />
            </a>
            <a
              href={"https://www.linkedin.com/in/deniro-dumas-7b57491ba/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#73bbdb", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
