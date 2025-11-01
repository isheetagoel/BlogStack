import React from "react";
import { Link } from "react-router-dom";
import { RiImageAddLine, RiAddLine } from "react-icons/ri";
import "./header.css";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header?.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <header className='header'>
      <div className='scontainer flex'>
        <div className='logo'>
          <Link to="/home" className="logo-link">
            <img 
              src={require("../../assets/images/logo.png")} 
              alt='logo' 
              className="logo-image"
            />
          </Link>
        </div>
        <div className="nav-buttons">
          <Link to='/create'>
            <button className='box create-post'>
              <RiAddLine className='icon' />
              <h4>Create Post</h4>
            </button>
          </Link>
          <Link to='/ypost'>
            <button className='box your-posts'>
              <RiImageAddLine className='icon' />
              <h4>Your Posts</h4>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};