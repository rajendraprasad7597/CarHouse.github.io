import React from "react";
import Sixcomp from "./Sixcomp";
import carimg from "./../assets/images/car-6.jpg"
import carimg1 from "./../assets/images/car-7.jpg"

const Six = () => {
  return (
    <>
      <section className="six1">
        <div className="outerpart1">
          <Sixcomp cars={carimg} />
          <Sixcomp cars={carimg1} />
          <div className="car3">
            <img src="src/assets/images/img10.jpg" alt="" />
            <div className="carcard">New</div>
            <div className="cartext">
              <h5>
                <span>1050.00</span> Fixed
              </h5>
              <p>Electric Cars of 2019</p>
            </div>
            <div className="carhover"></div>
          </div>
        </div>
        <div className="outerpart2">
          <div className="car4">
            <img src="src/assets/images/img-11.jpg" alt="" />
            <div className="carcard">New</div>
            <div className="cartext">
              <h5>
                <span>1050.00</span> Fixed
              </h5>
              <p>Electric Cars of 2019</p>
            </div>
            <div className="carhover"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Six;
