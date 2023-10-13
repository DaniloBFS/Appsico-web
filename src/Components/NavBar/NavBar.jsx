import React from 'react'
import { useState } from "react"; // import state
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="navBar flex justify-between items-center p-[2rem] mb-[1rem]">
      <a href="/">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-blueColor">
            <strong>App</strong>sico
            </h1>
        </div>
      </a>
      
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link to="/">
                Home
              </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link to="/Psicologos">
                Psicólogos
              </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link to="/Login">
                Login
              </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link to="/Registro">
                Registre-se
              </Link>
              </li>
              
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
          <Link to="/">
            Home
          </Link>
          </li>
          <li>
          <Link to="/Psicologos">
            Psicólogos
          </Link>
          </li>
          <li>
            <Link to="/Login">
             Login
            </Link>
          </li>
          <li>
            <Link to="/Registro">
             Registre-se
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
































