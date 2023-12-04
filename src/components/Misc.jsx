import React from 'react'
import "../styles/misc.scss";
import {BsMouse} from "react-icons/bs";
import logo from "../assets/logo.png";
const Misc = () => {
  return (
    <>
    <div className="cursor"></div>
    <a href="/" className="logo">
        <img data-cursorpointer src={logo} alt="" />
    </a>
    <button className="franchiseBtn" data-cursorpointer={true}> GET A FRANHISE</button>
     <BsMouse className='scrollBtn'/>
    </>
  )
}

export default Misc