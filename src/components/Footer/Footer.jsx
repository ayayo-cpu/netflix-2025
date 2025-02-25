import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footerOuterContainer">
      <div className="footerInnerContainer">
        <div className="footerIcons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footerData">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copyWrite">&copy; 1997-2025 Netflix, Inc.</div>
      </div>
    </div>
  );
}

export default Footer;
