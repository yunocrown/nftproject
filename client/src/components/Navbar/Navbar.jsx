import React, { useContext, useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import classes from "./Navbar.module.css"
import Dropdown from "./Dropdown.jsx"
import { sellerAuthContext , userAuthContext } from "../../Contexts";

import profile_icon from "../../Assets/profile.svg";
import Logo from '../UI/Logo/Logo';

const Navbar = () => {
  const redirect = useNavigate();
  const { isSellerAuthenticated , logoutSeller } = useContext(sellerAuthContext);
  const { isUserAutheticated , logout } = useContext(userAuthContext);
  const autheticated = isSellerAuthenticated || isUserAutheticated;
  const logoutHandler = () => {
    if (isSellerAuthenticated) {
        logoutSeller();
    } else {
        logout();
    }
    redirect("/login")
  }

 
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
        <nav className={classes.navbar}>
            <NavLink 
                to="/"
                className={classes.navbar_logo}
                onClick={closeMobileMenu}
            >
                <Logo />
            </NavLink>
            <div
                className={classes.menu_icon}
                onClick={handleClick}
            >
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <div className={classes.align}>
                <ul
                    className={
                        click ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu
                    }
                >
                    <li className={classes.nav_item}>
                        <NavLink
                            to="/"
                            className={classes.nav_links}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li 
                        className={classes.nav_item}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <NavLink
                            to="/explore"
                            className={classes.nav_links}
                            onClick={closeMobileMenu}
                        >
                            Explore
                            <i className='fas fa-caret-down'/>
                        </NavLink>
                        {dropdown && 
                            <Dropdown />
                        }
                    </li>

                    <li className={classes.nav_item}>
                        <NavLink className={classes.nav_links}>
                            How it work
                        </NavLink>
                    </li>

                    <li className={classes.nav_item}>
                        <NavLink 
                            to="/verfynft"
                            className={classes.nav_links}
                            onClick={closeMobileMenu}
                        >
                            Verify Warranty
                        </NavLink>
                    </li>
                    
                    {!autheticated && (
                        <>
                            <li className={classes.nav_item}>
                                <NavLink className={classes.nav_links} to="/signup">
                                    Signup
                                </NavLink>
                            </li>
                            <li className={classes.nav_item}>
                                <NavLink className={classes.nav_links} to="/login">
                                    Login
                                </NavLink>
                            </li>
                        </>
                    )}
                    {autheticated && (
                        <>
                            <li className={classes.nav_item}>
                                <div onClick={logoutHandler} className={classes.nav_links}>
                                    Logout
                                </div>
                            </li>
                            <li>
                                <NavLink
                                    to={
                                        isSellerAuthenticated ? "/retailer/dashboard" : "/user/dashboard"
                                    }
                                >
                                    <div className={classes.icon_container}>
                                        <img 
                                            className={classes.icon}
                                            src={profile_icon}
                                            alt='profileIcon'
                                        />
                                    </div>
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;