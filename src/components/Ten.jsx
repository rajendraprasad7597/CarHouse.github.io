import React from "react";

const Ten = () => {
  return (
    <>
      <section className="ten">
        <div className="ten1"></div>
        <div className="ten2">
          <div className="scroll">
            <div className="tenA">
              <h2>
                Why Clients <span>Love Us</span>{" "}
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text everLorem industry's standard dummy text everLorem Ipsum
                Lorem Ipsum is simply dummy text of the printing. as
              </p>
            </div>
            <div className="tenB">
              <img src="src/assets/images/ten1.jpg" alt="" />
            </div>
            <div className="tenC">
              <h4>Karen Paran</h4>
              <p>CEO, Brick Consulting</p>
            </div>
          </div>
          <div className="scrolbtn">
            <button className="arrowprev"></button>
            <button className="arrowprev"></button>
            <button className="arrowprev"></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ten;
