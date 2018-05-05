import React from 'react';
import logo from './img/Logo.svg'


const Header = () => {
  const handleClick = (e) =>{
    const navItems = document.getElementById("nav-ham");
    const header = document.getElementsByTagName("header")[0];
    const barTop = document.querySelector(".bar-top");
    const barMid = document.querySelector(".bar-mid");
    const barBot = document.querySelector(".bar-bot");

    navItems.classList.toggle("nav-show");
    header.classList.toggle("header-show");

    barTop.classList.toggle("transition-bar-top");
    barMid.classList.toggle("transition-bar-mid");
    barBot.classList.toggle("transition-bar-bot");
  }
  return (
    <header id="top">
      <nav>
        <div className='nav__row-one'>
          <div className="wrapper-row-one">
            <a className="home-link" href='http://www.richieblack.me'>
              <img src={logo} alt="Website Logo" id="logo" />
              <div className="title">
                <h1 className="title__text"><span className="hidden">R</span>ichie Black</h1>
              </div>
            </a>
            <button id="hamburger" onClick={handleClick} type="button">
              <div className="bar-top"></div>
              <div className="bar-mid"></div>
              <div className="bar-bot"></div>
            </button>
          </div>
        </div>

        <div className='nav__row-two' id="nav-ham">
          <div className="wrapper-row-two">
            <ul className='nav__list'>
              <li className='nav__list__item'><a href='../../index.html#projects'>Projects</a></li>
              <li className='nav__list__item'><a href='http://blog.richieblack.me'>Blog</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
