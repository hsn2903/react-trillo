import React from "react";
import {
  IoBookmark,
  IoChatbox,
  IoSearchOutline,
  IoHomeSharp,
  IoAirplaneSharp,
  IoKeySharp,
  IoMapSharp,
  IoStarSharp,
  IoLocationSharp,
} from "react-icons/io5";

import logo from "../assets/img/logo.png";
import userPhoto from "../assets/img/user.jpg";

import hotel1 from "../assets/img/hotel-1.jpg";
import hotel2 from "../assets/img/hotel-2.jpg";
import hotel3 from "../assets/img/hotel-3.jpg";

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
      <nav className="sidebar">
        <ul className="sidenav">
          <li className="sidenav__item sidenav__item--active">
            <a href="#" className="sidenav__link">
              <IoHomeSharp className="sidenav__icon" />
              <span>Hotel</span>
            </a>
          </li>
          <li className="sidenav__item">
            <a href="#" className="sidenav__link">
              <IoAirplaneSharp className="sidenav__icon" />
              <span>Flight</span>
            </a>
          </li>
          <li className="sidenav__item">
            <a href="#" className="sidenav__link">
              <IoKeySharp className="sidenav__icon" />
              <span>Car Rental</span>
            </a>
          </li>
          <li className="sidenav__item">
            <a href="#" className="sidenav__link">
              <IoMapSharp className="sidenav__icon" />
              <span>Tours</span>
            </a>
          </li>
        </ul>

        <div className="legal">
          &copy; {new Date().getFullYear()} by Trillo. All rights reserved.
        </div>
      </nav>
      <div className="content">
        <div class="gallery">
          <figure class="gallery__item">
            <img src={hotel1} alt="Photo of hotel 1" class="gallery__photo" />
          </figure>
          <figure class="gallery__item">
            <img src={hotel2} alt="Photo of hotel 2" class="gallery__photo" />
          </figure>
          <figure class="gallery__item">
            <img src={hotel3} alt="Photo of hotel 3" class="gallery__photo" />
          </figure>
        </div>

        <div class="overview">
          <h1 class="overview__heading">Hotel Las Palmas</h1>

          <div class="overview__stars">
            <IoStarSharp class="overview__icon-star" />
            <IoStarSharp class="overview__icon-star" />
            <IoStarSharp class="overview__icon-star" />
            <IoStarSharp class="overview__icon-star" />
            <IoStarSharp class="overview__icon-star" />
          </div>

          <div class="overview__location">
            <IoLocationSharp class="overview__icon-location" />
            <button class="btn-inline">Albufeira, Portugal</button>
          </div>

          <div class="overview__rating">
            <div class="overview__rating-average">8.6</div>
            <div class="overview__rating-count">429 votes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
