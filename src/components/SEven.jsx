import React from "react";
import Sevencomp from "./Sevencomp";
const SEven = () => {
  return (
    <>
      <section className="seven">
        <div className="seventext">
          <h2>
            More Than 10 Years <span />
            of
          </h2>
          <p>Experience</p>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </h4>
        </div>
        <div className="sevenpart1">
        <Sevencomp val="1276" />
        <Sevencomp val="967"/>
        </div>
        <div className="sevenpart2">
        <Sevencomp val="177"/>
        <Sevencomp val="396"/>           
        </div>
      </section>
    </>
  );
};

export default SEven;
