import React from "react";
import { IoBookmark, IoChatbox, IoSearchOutline } from "react-icons/io5";

import logo from "../assets/img/logo.png";
import userPhoto from "../assets/img/user.jpg";

const Home = () => {
  return (
    <div className="container">
      <header class="header">
        <img src={logo} alt="trillo logo" class="logo" />

        <form action="#" class="search">
          <input
            type="text"
            class="search__input"
            placeholder="Search hotels"
          />
          <button class="search__button">
            <IoSearchOutline class="search__icon" />
          </button>
        </form>

        <nav class="user-nav">
          <div class="user-nav__icon-box">
            <IoBookmark className="user-nav__icon" />
            <span class="user-nav__notification">7</span>
          </div>
          <div class="user-nav__icon-box">
            <IoChatbox className="user-nav__icon" />
            <span class="user-nav__notification">13</span>
          </div>
          <div class="user-nav__user">
            <img
              src={userPhoto}
              alt="User photo"
              class="user-nav__user-photo"
            />
            <span class="user-nav__user-name">Jonas</span>
          </div>
        </nav>
      </header>
      <nav className="sidebar">sidebar</nav>
      <div className="content">hotel view</div>
    </div>
  );
};

export default Home;
