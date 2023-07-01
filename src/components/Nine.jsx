import React from "react";
import Ninecomp from "./Ninecomp";
import profilphoto1 from "./../assets/images/avatar-1.jpg"
import profilphoto2 from "./../assets/images/avatar-2.jpg"
import profilphoto3 from "./../assets/images/avatar-3.jpg"
import profilphoto4 from "./../assets/images/avatar-12.jpg"
import profilphoto5 from "./../assets/images/avatar-1.jpg"
import profilphoto6 from "./../assets/images/avatar-2.jpg"
import profilphoto7 from "./../assets/images/avatar-3.jpg"
import profilphoto8 from "./../assets/images/avatar-12.jpg"
const Nine = () => {
  return (
    <>
      <section className="nine">
        <div className="nineA">
          <Ninecomp profile={profilphoto1} />
          <Ninecomp profile={profilphoto2} />
          <Ninecomp profile={profilphoto3} />
          <Ninecomp profile={profilphoto4} />
        </div>

        <div class="nineA">
          <Ninecomp profile={profilphoto5} />
          <Ninecomp profile={profilphoto6} />
          <Ninecomp profile={profilphoto7} />
          <Ninecomp profile={profilphoto8} />
        </div>
      </section>
    </>
  );
};

export default Nine;
