import React from "react";
import Secondcomp from "./Secondcomp";
const Second = () => {
  return (
    <div className="second">
      <div className="s1">
        <h5>Select Brand</h5>
        <form action="">
          <Secondcomp/>
        </form>

        <form action="" className="typeofcar">
          <h5>Select Type OF car</h5>

          <Secondcomp/>
        </form>
      </div>
      <div className="s2">
        <h5>Select Make</h5>
        <form action="">
        <Secondcomp/>
                 </form>

        <form action="" className="Transmission">
          <h5>Transmission</h5>
          <Secondcomp/>
        </form>
      </div>

      <div className="s3">
        <h5>Select Location</h5>
        
        <form action="">
        <Secondcomp/>
                  </form>
        <form action="">
          <input type="range" id="vol" name="vol" min="0" max="50" />
          <h4>0USD</h4>
          <p>150000USD</p>
        </form>
      </div>
      <div className="s4">
        <h5>Select Year</h5>
        <form action="" className="year">
        <Secondcomp/>
          <div className="btn3">Serach</div>
        </form>
      </div>
    </div>
  );
};

export default Second;
