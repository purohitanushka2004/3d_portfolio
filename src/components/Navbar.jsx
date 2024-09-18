import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as style from '../styles';
import { logo, menu, close } from "../assets";
import { NavLink } from "react-router-dom";
import resumeFile from '../assets/AnushkaPurohit_dehradun_fresher_050924.pdf'; // Assuming your resume is stored in the assets folder

const Navbar = () => {
  const [active, setActive] = useState(""); // State to manage active link
  const navLinks = [
    { id: 'about', title: 'About', url: '/about' },
    { id: 'work', title: 'Work', url: '/work' },
    { id: 'contact', title: 'Contact', url: '/contact' },
    { id: 'Download Resume', title: 'Download Resume', url: resumeFile }, // Updated URL for resume download
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${style.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Anushka Purohit &nbsp;
            <span className="sm:block hidden">| Software Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.title === 'Download Resume' ? (
                <a href={link.url} download>
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-4 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.title === 'Download Resume' ? (
                    <a href={link.url} download>
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
