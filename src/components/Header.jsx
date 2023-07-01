import React from 'react'

const Header = () => {
  return (
    <>
    <div className="first">
    <div className="f1"> <img src="src/assets/images/black-logo.png" alt="" /></div>
    <div className="f2">
         <div className="icon"> <h2><i className="fa-solid fa-location-dot"></i></h2>
        </div>
        <div className="imf">
            <p>Our Location</p>
            <h4>  25/7 Barden, London</h4>
           </div>
</div>
    <div className="f3">  <div className="icon"> <h2><i className="fa-regular fa-envelope"></i></h2>
       </div>
       <div className="imf">
        <p>Online Support</p>
    <h4> info@rana.com</h4>
    </div>
    </div>
    <div className="f4">  <div className="icon"> <h2><i className="fa-solid fa-phone-volume"></i></h2>
       </div>
       <div className="imf">
        <p>Contact Us</p>
        <h4>  +00-4X6-634-781</h4>
    </div>
    </div>
</div>

<div className="header">
     <ul>
        <a href=""><li>HOME</li></a>
        <a href=""><li>CAR LISTING</li></a>
        <a href=""><li>SERVICES</li></a>
        <a href=""><li>PAGES</li></a>
        <a href=""><li>SHOP</li></a>
        <a href=""><li>BLOG</li></a>
        <a href=""><li>CONTACT</li></a>
        <div className="icon2"><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></div>
     </ul>
</div>
</>
  )
}

export default Header