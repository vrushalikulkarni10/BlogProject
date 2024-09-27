import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
    <header>
    <div className="container">
      <nav>
        <div className="logo">
        <RiAccountCircleFill />
        </div>
        <ul className={isOpen ? "nav-link active" : "nav-link"}>
          <li>
            <a href="/Home" >Home</a>
          </li>
          <li>
            <a href="/About Me">About Me</a>
          </li>
          <li>
            <a href="/Dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/Logout">Logout</a>
          </li>
        </ul>
        <div className="icon" onClick={toggleMenu}>
        <FaBars />
        </div>
      </nav>
    </div>
    </header>
    </>
  );
}

export default Navbar