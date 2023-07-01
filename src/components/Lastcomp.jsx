import React from 'react'

const Lastcomp = (props) => {
  return (
    <>
        <div className="imgcard1">
            <div className="outerimage1">
              <img src={props.carimg} />
              <div className="outerhover1">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="innernine1">
              <div className="innertext">
                <h3>Quality not Quantity for Selling Cars Today</h3>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                </p>
                <h5>
                  <i className="fa-solid fa-calendar-days"> </i> 25 june 2021{" "}
                  <span>
                    <i className="fa-regular fa-comments"></i> com(05)
                  </span>
                </h5>
              </div>
            </div>
          </div>

    </>
  )
}

export default Lastcomp