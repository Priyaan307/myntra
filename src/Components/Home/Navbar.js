import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './Navbar.css'
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container" >
        <div onClick={ () => {
          navigate('/')
        }} className="myntra-logo-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 818.08 652"
        id="myntra"
      >
        <path
          fill="#f37320"
          fill-rule="evenodd"
          d="M415.84 569.9a5.39 5.39 0 0 0-1 .3 2.93 2.93 0 0 0 1-.3M395.94 570.5a.6.6 0 0 1-.4-.1.6.6 0 0 0 .4.1M412.64 570.7c-.7.1-1.6.3-2.2.4.6-.1 1.4-.3 2.2-.4M408.64 571.2a11.48 11.48 0 0 1-1.8.1 3.73 3.73 0 0 0 1.8-.1"
        ></path>
        <path
          fill="#f15e22"
          fill-rule="evenodd"
          d="M410.24 571c-.6 0-1.2.1-1.6.1a9.74 9.74 0 0 0 1.6-.1M395.64 570.5a28 28 0 0 1-2.8-.6c.9.1 1.8.4 2.8.6M414.94 570.1a16.84 16.84 0 0 1-2.4.6 16.84 16.84 0 0 0 2.4-.6M403.44 571.4a37.41 37.41 0 0 1-7.4-.9 30.6 30.6 0 0 0 7.4.9M406.74 571.3c-.7 0-1.6.1-2.5.1a19.29 19.29 0 0 0 2.5-.1M566.24 155.8h-.1a11 11 0 0 0-4.4-.7 21.8 21.8 0 0 1 5.8 1.3 7.54 7.54 0 0 1-1.3-.6"
        ></path>
        <path
          fill="#ec008b"
          fill-rule="evenodd"
          d="M556.24,155.8h-.1a5.21,5.21,0,0,1-1.5.6,21.69,21.69,0,0,1,7.2-1.2,11.3,11.3,0,0,0-5.6.6"
        ></path>
        <path
          fill="#f15e22"
          fill-rule="evenodd"
          d="M613.34,171.9h0a11.77,11.77,0,0,0-4.5-.7,16.09,16.09,0,0,1,5.8,1.3,6.87,6.87,0,0,0-1.3-.6"
        ></path>
        <path
          fill="#ec008b"
          fill-rule="evenodd"
          d="M603.24,171.8h0a4.59,4.59,0,0,1-1.6.7,19.16,19.16,0,0,1,7.1-1.3,12.64,12.64,0,0,0-5.5.6"
        ></path>
        <path
          fill="#f15e22"
          fill-rule="evenodd"
          d="M615.34,172.9h0a11.66,11.66,0,0,0-4.5-.6,16.26,16.26,0,0,1,5.8,1.2c-.5-.2-.8-.4-1.3-.6"
        ></path>
        <path
          fill="#ec008b"
          fill-rule="evenodd"
          d="M605.34,172.8h0c-.5.3-1,.4-1.6.7a18.81,18.81,0,0,1,7.1-1.3,16,16,0,0,0-5.5.6"
        ></path>
        <path
          fill="#f13ab1"
          fill-rule="evenodd"
          d="M238.64,72.3h.1c.4-.1,1-.3,1.5-.4-39.7,6-127.7,147.6-175,277.5-50.3,138.3-38.2,205,1.3,219.5h.1c39.5,14.3,91.6-29,142-167.4,13.6-37.3,25.2-77.7,34.4-116.9-24.5-105.4-29.9-202.7-4.4-212.3"
        ></path>
        <path
          fill="#fd913c"
          fill-rule="evenodd"
          d="M389.74,568.9h0c-39.7-14.6-51.6-81.4-1.3-219.5,5-13.7,10.3-27.6,16.2-41.3-51.7-123.5-131.4-243.2-164.4-236.3a16.31,16.31,0,0,1,7.1.6h.1v.1C273,82,267.54,179.2,243,284.7a978.28,978.28,0,0,0,34.4,116.8c39.7,109,80.5,158.9,115.3,168.2a22.62,22.62,0,0,1-3-.8"
        ></path>
        <path
          fill="#f05524"
          fill-rule="evenodd"
          d="M247.34,72.5h-.1a15.38,15.38,0,0,0-6.8-.6c-.7.1-1,.3-1.6.4h-.1c-25.5,9.6-20.1,106.9,4.3,212.3,24.3-105.4,29.8-202.5,4.3-212.1"
        ></path>
        <path
          fill="#fd913c"
          fill-rule="evenodd"
          d="M558.94,73c-37,13.4-107,122.8-154.2,235,5.8,13.7,11.2,27.6,16.2,41.3,50.3,138.2,38.3,205-1.3,219.4v.1c-1.2.3-2.5.7-3.5,1,34.9-9,76.1-58.8,115.7-168.4a953,953,0,0,0,33.6-113.7c-24.5-104.5-30.7-202-6.5-214.7"
        ></path>
        <path
          fill="#f05524"
          fill-rule="evenodd"
          d="M419.44,568.8h.1c39.5-14.4,51.5-81.4,1.3-219.5-5.2-13.7-10.5-27.6-16.4-41.3-5.8,13.7-11.2,27.6-16.2,41.3-50.3,138.2-38.2,205.1,1.3,219.5,1,.4,2.1.6,3.1.9a14.34,14.34,0,0,0,2.8.7h.4a40.73,40.73,0,0,0,7.5,1h3.2a9.66,9.66,0,0,0,1.8-.3c.7,0,1.2-.1,1.9-.1s1.3-.3,2.1-.4a9.27,9.27,0,0,0,2.4-.4c.4,0,.7-.1,1-.1,1.3-.5,2.5-.8,3.7-1.3"
        ></path>
        <path
          fill="#f13ab1"
          fill-rule="evenodd"
          d="M571.54,72.9c24.5,12.2,18.4,109.8-6.2,215a976.22,976.22,0,0,0,33.5,113.5c50.4,138.3,102.5,181.7,142.2,167.4h.1c39.4-14.6,51.5-81.2,1.2-219.5C696.64,223.8,613,87.5,571.54,72.9"
        ></path>
        <path
          fill="#f05524"
          fill-rule="evenodd"
          d="M571.54,72.9a23.2,23.2,0,0,0-5.8-1.3,22.62,22.62,0,0,0-7.1,1.5c-24,12.7-18,110,6.6,214.8,24.8-105.1,30.8-202.7,6.3-215"
        ></path>
      </svg>
      </div>
      <div className="category-container">
        <span>MEN</span>
        <span>WOMEN</span>
        <span>KIDS</span>
        <span>HOME & LIVING</span>
        <span>BEAUTY</span>
        <span>STUDIO<sup style={{color: 'pink', fontSize: 10}}>NEW</sup></span>
      </div>
      <div className="search-container">
        <button><SearchIcon/></button>
        <input type='text' placeholder="Search for products, brands and more" />
      </div>
      <div className="icon-container">
<div className="icon"><PermIdentityIcon sx={{color: 'gray'}}/><p>Profile</p></div>
<div className="icon"><FavoriteBorderIcon sx={{color: 'gray'}}/><p>Wishlist</p></div>
<div className="icon"><ShoppingBagOutlinedIcon sx={{color: 'gray'}}/><p>Bag</p></div>
      </div>
    </div>
  );
};

export default Navbar;
