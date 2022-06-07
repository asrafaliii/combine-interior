import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navbarItem = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Team</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 px-12 sticky top-0 z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItem}
          </ul>
        </div>
        <a>
          <img src={Logo} width={200} />
        </a>
      </div>
      <div class="navbar-end hidden lg:flex ">
        <ul class="menu menu-horizontal p-0">{navbarItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
