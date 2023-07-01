import React from 'react'

const Thirdcomp = (props) => {
  return (
  <>
    <div className="card">
        <div className="upperbody">
          <img src={props.image} alt=""/>
          <button>For Sale</button>
          <div className="inner">
            <div><i className="fa-solid fa-road"></i> <span>4,000km</span></div>`
            <div><i className="fa-regular fa-calendar-days"></i><span>2019</span></div>
            <div><i className="fa-solid fa-car"></i> <span>Manual</span></div>
          </div>
          <div className="rgbacolor">
          <div className="hovericon">
            <i className="fa-regular fa-eye-slash"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-scale-balanced"></i>
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i> 
          </div>
          </div>
        </div>
          <div className="lowerbody">
            <div className="name">lamborghini Hurcan`</div>
            <div className="city">
              <i className="fa-solid fa-location-dot"></i>123Khatl St.Tampa City
            </div>
            </div>
            <div className="raiting">
              <hr/>
              <div className="star">
                <img src="src/assets/images/star4.png" alt=""/> <h4>(65 Reviews)</h4>
                <h3 >$640.00</h3>
              </div>
               </div>
   </div>
   
  </>
  )
}

export default Thirdcomp