import React from "react";
import Hamburger from "@/public/hamburger.svg";
import Image from "next/image";
import { Lora } from 'next/font/google'

const font = Lora({
    weight: '400',
    subsets: ['latin'],
})

const navList = [
    {label: "Home", value: "home"},
    {label: "Experience", value: "experience"},
    {label: "Technology", value: "technology"},
    {label: "Project", value: "project"},
    // {label: "Testimonial", value: "testimonial"},
];



const Navbar = () => {
  return (
    <nav>
      <input type={"checkbox"} id="nav-checkbox" />
      <div className="logo-section">
        <div >
          <span className={`logo text-primary ${font.className}`}>o</span> 
          <span className={`logo text-dark ${font.className}`}>p</span> 
        </div>
        <label htmlFor="nav-checkbox" className="hamburger">
          <Image height={30} src={Hamburger} alt="hamburger.svg" />
        </label>
      </div>
      <ul className="nav-list">
       {navList.map(e=> <li>
          <a href={`#${e.value}`}>{e.label}</a>
        </li>)}
    
      </ul>
    </nav>
  );
};

export default Navbar;
