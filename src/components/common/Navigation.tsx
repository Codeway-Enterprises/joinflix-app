import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.webp';
import * as route from '../../constants/routes';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="navigation__wrapper">
          <div className="navigation__logo">
            <Link to={route.HOME}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navigation__menu-wrapper">
            <div className="navigation__menu">
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link"
                exact
                strict
                to={route.HOME}
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link"
                exact
                strict
                to={route.TRENDING}
              >
                Trending
              </NavLink>
              <div className="navigation__dropdown">
                <NavLink
                  activeClassName="navigation__active"
                  className="navigation__link navigation__dropdown-item"
                  exact
                  strict
                  to={route.DISCOVER}
                >
                  Discover
                </NavLink>
                <div className="navigation__dropdown-wrapper">
                  <Link to={route.POPULAR}>Popular</Link>
                  <Link to={route.UPCOMING}>Upcoming</Link>
                  <Link to={route.TOP_RATED}>Top Rated</Link>
                </div>
              </div>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link desktop-hide"
                exact
                strict
                to={route.POPULAR}
              >
                Popular
              </NavLink>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link desktop-hide"
                exact
                strict
                to={route.TOP_RATED}
              >
                Top Rated
              </NavLink>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link desktop-hide"
                exact
                strict
                to={route.UPCOMING}
              >
                Upcoming
              </NavLink>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link"
                exact
                strict
                to={route.TV}
              >
                TV Shows
              </NavLink>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link"
                exact
                strict
                to={route.PEOPLE}
              >
                People
              </NavLink>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link"
                exact
                to={route.GENRE}
              >
                Genres
              </NavLink>
              <NavLink
                activeClassName="navigation__active"
                className="navigation__link"
                exact
                strict
                to={route.FAVORITES}
              >
                Favorites
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
