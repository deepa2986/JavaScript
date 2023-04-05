import React from "react";
import "./styles/Login.css";
import "./styles/Registration.css"
 import { Link } from "react-router-dom";

function Registration() {
  return (
    // <div className="first">
       <div className="second"> 
        {/* <div className='thrd'> My Company </div> */}
        <span className="third">My Company</span>
        <form className="form">
          {/* <div className="vl"> */}
          {/* <span class="vl-innertext">or</span> */}
          {/* </div> */}
          <input type="text" className="half-span-text " placeholder="FirstName" name="firstName"></input>
          <br />
          <input type="password" className="half-span-text " placeholder="Password" name="password"></input>
          <div>
          <input type="text" className="half-span-text " placeholder="LastName"></input>
          <br/>
          </div>
          <br />
          <button type="submit" className="half-span-text ">
            Sign Up
          </button>
         
          {/* <p className="ab25">
            {" "}
            New user?
            <Link to="/"> Sign up </Link>
          </p> */}
        </form>
        
      </div>
    // </div>
  );
}

export default Registration;
