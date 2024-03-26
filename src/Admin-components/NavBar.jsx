import React from 'react'
import { useState } from 'react';
import {  MdLogout, MdPostAdd } from "react-icons/md";
//import { ImProfile } from "react-icons/im";
<<<<<<< HEAD
import { FcMultipleDevices } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
=======
import { FaHospital } from "react-icons/fa";
>>>>>>> 551b8ac0aa26f1dd3f6b25374da7fe0bbad4aba8
import './navbar.css'
const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
            {/* <img src={image} ></img> */}
            <span className="cursive-font">Resource_Manager</span>
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                {/* hamburger svg code... */}
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/viewResource"><FcMultipleDevices/> Resources</a>
                    </li>
                    <li>
                        <a href="/userAllocationRequest"><FcNews/>Allocations</a>
                    </li>
                    <li>
                        <a href="/addResource"><MdPostAdd/> Add Resources</a>
                    </li>
                    <li>
                        <a href="/" onClick={()=>sessionStorage.clear()}><MdLogout/> Log out</a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

export default NavBar