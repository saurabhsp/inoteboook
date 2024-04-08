import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-line"></div>
        <div className="footer-wrapper">
          <section className="footer-top">
            <div className="footer-headline">
              <h2>Sign up to our iNotebook</h2>
              <p>Secure your data on Cloud</p>
            </div>
            <div className="footer-subscribe">
              <input type="email" spellcheck="false" placeholder="Your Email" />
              <button>Sign Up</button>
            </div>
          </section>
          <div className="footer-columns">
            <section className="footer-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="#ffffff"
                  stroke="#000000"
                  stroke-width="2"
                />

                <rect x="15" y="15" width="70" height="80" fill="#ffffcc" />

                <circle cx="20" cy="50" r="2" fill="#000000" />
                <circle cx="20" cy="60" r="2" fill="#000000" />
                <circle cx="20" cy="70" r="2" fill="#000000" />
                <circle cx="80" cy="50" r="2" fill="#000000" />
                <circle cx="80" cy="60" r="2" fill="#000000" />
                <circle cx="80" cy="70" r="2" fill="#000000" />
              </svg>

              <h2 className="hide">Saurya &hearts; </h2>
            </section>
            <section>
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="/" title="API">
                    API
                  </a>
                </li>
                <li>
                  <a href="/" title="Pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/" title="Documentation">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/" title="Release Notes">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="/" title="Status">
                    Status
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="/" title="Support">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/" title="Sitemap">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="/" title="Newsletter">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="/" title="Help Centre">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="/" title="Investor">
                    Investor
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/" title="About Us">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" title="Blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" title="Careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/" title="Press">
                    Press
                  </a>
                </li>
                <li>
                  <a href="/" title="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="/" title="Terms and services">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/" title="Privacy Policy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/" title="Cookies">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="/" title="Licenses">
                    Licenses
                  </a>
                </li>
                <li>
                  <a href="/" title="Cookies">
                    Contact
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="footer-bottom">
            <small>
              © My Company Ltd. <span id="year"></span>, All rights reserved
            </small>
            <span className="social-links">
              <a href="/" title="Instagram">
                <img src="assets/instagram.svg" alt="Instagram" />
              </a>
              <a href="/" title="Linkedin">
                <img src="assets/linkedin.svg" alt="Linkedin" />
              </a>
              <a href="/" title="Twitter">
                <img src="assets/twitter.svg" alt="Twitter" />
              </a>
              <a href="/" title="Youtube">
                <img src="assets/youtube.svg" alt="YouTube" />
              </a>
              <a href="/" title="GitHub">
                <img src="assets/github.svg" alt="GitHub" />
              </a>
            </span>
          </div>
        </div>
      </footer>

      <script>
        document.getElementById("year").innerHTML = new Date().getFullYear();
      </script>
    </>
  );
};

export default Footer;
