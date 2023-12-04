import React from 'react'
import "../styles/loader.scss";
import logo from "../assets/logo.png";
const Loader = () => {
  return (
    <a href='/' className="loader">
    <img data-cursorpointer src={logo} alt="" />
</a>
  )
}

export default Loader