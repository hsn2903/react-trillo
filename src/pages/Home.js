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

import user1 from "../assets/img/user-1.jpg";
import user2 from "../assets/img/user-2.jpg";
import user3 from "../assets/img/user-3.jpg";
import user4 from "../assets/img/user-4.jpg";

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

        <div class="detail">
          <div class="description">
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nisi dignissimos debitis ratione sapiente saepe. Accusantium
              cumque, quas, ut corporis incidunt deserunt quae architecto
              voluptate.
            </p>
            <p class="paragraph">
              Accusantium cumque, quas, ut corporis incidunt deserunt quae
              architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>
            <ul class="list">
              <li class="list__item">Close to the beach</li>
              <li class="list__item">Breakfast included</li>
              <li class="list__item">Free airport shuttle</li>
              <li class="list__item">Free wifi in all rooms</li>
              <li class="list__item">Air conditioning and heating</li>
              <li class="list__item">Pets allowed</li>
              <li class="list__item">We speak all languages</li>
              <li class="list__item">Perfect for families</li>
            </ul>
            <div class="recommend">
              <p class="recommend__count">
                Lucy and 3 other friends recommend this hotel.
              </p>
              <div class="recommend__friends">
                <img src={user1} alt="Friend 1" class="recommend__photo" />
                <img src={user2} alt="Friend 2" class="recommend__photo" />
                <img src={user3} alt="Friend 3" class="recommend__photo" />
                <img src={user4} alt="Friend 4" class="recommend__photo" />
              </div>
            </div>
          </div>

          <div class="user-reviews">
            <figure class="review">
              <blockquote class="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption class="review__user">
                <img src="img/user-1.jpg" alt="User 1" class="review__photo" />
                <div class="review__user-box">
                  <p class="review__user-name">Nick Smith</p>
                  <p class="review__user-date">Feb 23rd, 2017</p>
                </div>
                <div class="review__rating">7.8</div>
              </figcaption>
            </figure>

            <figure class="review">
              <blockquote class="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </blockquote>
              <figcaption class="review__user">
                <img src="img/user-2.jpg" alt="User 1" class="review__photo" />
                <div class="review__user-box">
                  <p class="review__user-name">Mary Thomas</p>
                  <p class="review__user-date">Sept 13th, 2017</p>
                </div>
                <div class="review__rating">9.3</div>
              </figcaption>
            </figure>

            <button class="btn-inline">
              Show all <span>&rarr;</span>
            </button>
          </div>

          <div class="cta">
            <h2 class="cta__book-now">
              Good news! We have 4 free rooms for your selected dates!
            </h2>
            <button class="btn">
              <span class="btn__visible">Book now</span>
              <span class="btn__invisible">Only 4 rooms left</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
