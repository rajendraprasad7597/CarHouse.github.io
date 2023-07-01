import React from "react";
import Fivecomp from "./Fivecomp";
import Sheild from "./../assets/images/shield.png"
import deal from "./../assets/images/deal.png"
import service from "./../assets/images/customer-service.png"
import doller from "./../assets/images/dollar-symbol.png"
const Five = () => {
  return (
    <div className="five">
      <div className="five1">
        <div className="heading1">
          <h2>What Are You</h2>
          <h3>Looking For</h3>

          <p>
          
            Allow us to guide you through the innovative stress <br /> free
            approach in finding your dream car.
          </p>

          <div className="readmore">Read More</div>
        </div>
      </div>

      <div className="part1">
        <div className="service1">
          <div className="sheild">
          <Fivecomp img={Sheild} />
          </div>
        </div>
        <div className="service2">
          <div className="deal">
           <Fivecomp img={deal} />
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="service3">
          <div className="service">
           <Fivecomp img={service}/>
          </div>
        </div>
        <div className="service4">
          <div className="doller">
           <Fivecomp img={doller}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
