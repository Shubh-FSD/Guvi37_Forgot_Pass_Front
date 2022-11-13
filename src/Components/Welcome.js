import React from "react";
import "../CSS/Welcome.css";

import Navbar1 from "./Navbar1";

export default function Welcome() {
  
  //  let handleBeforeLogin = async ()=>{ navigate('/loginBefore')}
  //  let handleRegister = async ()=>{ navigate('/Register')}
  return (
    <div id="content" className="wallpaper">
      <Navbar1 />
    <div >
      <div className="Entry-Caption ">
        <div className="row">
          <div className="Adjust_text">
            <h1>Hi, Welcome to The LOGIN FORGOT RESET PASSWORD APP</h1>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}
