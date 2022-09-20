import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  
  const [state, setState] = useState("animate");

  function NavBar() {
    document.querySelector("nav").classList.toggle("block");
    document.querySelector("nav").classList.toggle(state, setState("animate2"));
    document.querySelector(".bar svg path").classList.toggle("white");
  }

  return (
    <div>
      <div className="container">
        <div className="logo">
          <h1>
            Nozim<span></span>
          </h1>
        </div>
        <div onClick={NavBar} className="bar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92">
            <path
              className="white"
              d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"
            />
          </svg>
        </div>
        <nav>
          <ul>
            <li>
              <Link onClick={NavBar} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={NavBar} to="/About">
                About
              </Link>
            </li>
            <li>
              <Link onClick={NavBar} to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={NavBar} to="/Achievement">
                Achievement
              </Link>
            </li>
            <li>
              <Link onClick={NavBar} to="/Blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
