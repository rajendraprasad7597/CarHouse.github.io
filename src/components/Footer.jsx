import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footerpart">
          <div className="footer1">
            <h4>Contact Info</h4>
            <ul>
              <li>
                
                <i className="fa-solid fa-location-dot"></i>
                <span>20/F Green Road, Dhanmondi, Dhaka</span>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <span>info@themevessel.com</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>+0477 85X6 552</span>
              </li>
              <li>
                <i className="fa-solid fa-fax"></i> <span>+0024 85X6 987</span>
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>
                <span>+0024 85X6 987</span>
              </li>
            </ul>
          </div>
          <div className="footer2">
            <h4>Useful Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Car Listing</li>
              <li>Blog</li>
              <li>Gallery</li>
              <li>Contact Us</li>
              <li>Elements</li>
            </ul>
          </div>
          <div className="footer3">
            <h4>Recent Cars</h4>
            <div className="footer3A">
              <div className="footerA">
                <h3> Bentley Continental GT</h3>
                <h5>
                  $345,00 | <i className="fa-regular fa-calendar-days"></i> jan
                  12, 2020
                </h5>
              </div>
              <div className="carimg">
                <img src="src/assets/images/footer1.jpg" alt="" />
              </div>
              <div className="footer3A">
                <div className="footerA">
                  <h3> Fiat Punto Red</h3>
                  <h5>
                    $745,00 | <i className="fa-regular fa-calendar-days"></i>Sep
                    06, 2021
                  </h5>
                </div>
                <div className="carimg">
                  <img src="src/assets/images/footer2.jpg" alt="" />
                </div>
                <div className="footer3A">
                  <div className="footerA">
                    <h3> Nissan Micra Gen5</h3>
                    <h5>
                      $745,00 | <i className="fa-regular fa-calendar-days"></i>
                      Aug 26, 2021
                    </h5>
                  </div>
                  <div className="carimg">
                    <img src="src/assets/images/footer3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer4">
            <h4>Subscribe</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <form action="">
              <input type="email" placeholder="Email Address..." />
            </form>
            <button>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="copyright">
          
          <h5>© 2022 Theme Vessel. All Rights Reserved.</h5>
        </div>
        <div className="footericon">
          <ul>
            <li>
              <i className="fa-brands fa-square-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-google-plus"></i>
            </li>
            <li>
              <i className="fa-brands fa-invision"></i>
            </li>
          </ul>
          
          </div> 
      </section>
      <a href="#" className="buttonup">
            <i class="fa-solid fa-chevron-up"></i>
            </a>
        
    </>
  );
};

export default Footer;
