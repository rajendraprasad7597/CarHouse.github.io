import React from "react";
import Lastcomp from "./Lastcomp";
import carimg1 from "./../assets/images/last1.jpg"
import carimg2 from "./../assets/images/last2.jpg"
import carimg3 from "./../assets/images/last3.jpg"
import carimg4 from "./../assets/images/last1.jpg"
import carimg5 from "./../assets/images/last2.jpg"
import carimg6 from "./../assets/images/ten3.jpg"
const Last = () => {
  return (
    <>
      <section className="last">
        <div className="lastA">
          <Lastcomp carimg={carimg1}/>
          <Lastcomp carimg={carimg2}/>
          
          <Lastcomp carimg={carimg3}/>
        </div>

        <div className="lastA">
        <Lastcomp carimg={carimg4}/>
        <Lastcomp carimg={carimg5}/>
        <Lastcomp carimg={carimg6}/>
        </div>
      </section>
    </>
  );
};

export default Last;
