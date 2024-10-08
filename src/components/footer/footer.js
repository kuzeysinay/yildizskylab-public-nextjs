import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-cover'>
      <div className='footer-top relative'>
        
        <div className='footer-links-icon-container'>
          <a href='https://www.instagram.com/ytuskylab'>
            <FaInstagram className='fa-logo-footer' />
          </a>
          <a href='https://www.youtube.com/channel/UCF_qBKpUnM3X_C3L-gLEO4A'>
            <FaYoutube className='fa-logo-footer' />
          </a>
          <a href='https://www.linkedin.com/company/ytuskylab/'>
            <FaLinkedin className='fa-logo-footer' />
          </a>
          <a href='https://discord.com/invite/6jFBjH8y63'>
            <FaDiscord className='fa-logo-footer' />
          </a>
          <a href='https://x.com/skylabkulubu'>
            <FaXTwitter className='fa-logo-footer' />
          </a>
        </div>
      </div>

      <div className='footer-bottom relative'>
      <p className='footer-text'>
                Weblab tarafından geliştirildi.
            </p>
            <p className='footer-year mb-6'>2024 ©</p>
      </div>
    </div>
  );
};

export default Footer;
