import React from "react";
import "./Footer.css";
import "./Images.footer-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <a href="http://t.commonsupport.com/modrox" className="footer__logo">
          <img src="/images/footer-logo.png" alt="logo_footer" />
        </a>
      </div>
      <div className="footer__column">
        <h3>Our Address</h3>
        <ul>
          <li>54B, Tailstoi Town 5238 MT,La city, IA 522364</li>
        </ul>
        <ul>
          <li>+ 1800 568 9875 hello@modrox</li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a className="link--grey" href="http://t.commonsupport.com/modrox">
              Home
            </a>
          </li>
          <li>
            <a className="link--grey" href="/about.html">
              About Us
            </a>
          </li>
          <li>
            <a className="link--grey" href="http://t.commonsupport.com/modrox">
              Services
            </a>
          </li>
          <li>
            <a className="link--grey" href="http://t.commonsupport.com/modrox">
              Projects
            </a>
          </li>
          <li>
            <a className="link--grey" href="http://t.commonsupport.com/modrox">
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>Copyright</h3>
        <ul>
          <li>© 2019 Modrox. All rights reserved. Made by Themearc</li>
          <br />
          <br />
          <li>
            <a
              className="link--yellow"
              href="http://t.commonsupport.com/modrox"
            >
              Purchase now
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
