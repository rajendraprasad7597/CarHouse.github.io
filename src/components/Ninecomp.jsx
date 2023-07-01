import React from 'react'

const Ninecomp = (props) => {
  return (
    <>
           <div className="imgcard">
            <div className="outerimage">
              <div className="outerhover">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google-plus-g"></i>
              </div>
              <img src={props.profile}/>
            </div>
            <div className="innernine">
              <h3>Stone Caroyln</h3>
              <p>Creative Director</p>
            </div>
          </div>
    </>
  )
}

export default Ninecomp