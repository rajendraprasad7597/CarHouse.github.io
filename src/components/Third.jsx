import React from 'react'
import Thirdcomp from './Thirdcomp'
import image1 from "./../assets/images/car-4.jpg"
import image2 from "./../assets/images/car-9.jpg"
import image3 from "./../assets/images/car-8.jpg"
const Third = () => {
  return (
<>

<div className="four">
   <Thirdcomp image={image1}/>
   <Thirdcomp image={image2}/>
   <Thirdcomp image={image3}/>        
  </div>
            
               


                                     
</>
  )
}

export default Third