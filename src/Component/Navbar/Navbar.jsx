import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss";
export default function Navbar() {
  return (
   <div className="nav">
    <div className="logo">
      <img src="https://cdn-icons-png.flaticon.com/128/4807/4807695.png" alt="" />
    </div>
    <div className="right">
      <Link to="/home">Home</Link>
      <Link to="/ourservices">Our Services</Link>
      <Link to="/signin">Log Out</Link>
    </div>
   </div>
  )
}
