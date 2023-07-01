import React from 'react'
import { useEffect,useState } from 'react';
const Sevencomp = (props) => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < props.val) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [count, props.val]);
  return (
<>
<div className="seven1">
            <i className="fa-regular fa-comment-dots"></i>
            <h3 className="num">
              {count}
            </h3>
            <p>Dealer Reviews</p>
          </div>
</>
  )
}

export default Sevencomp