import React from "react";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Search from "../components/search";
const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home-header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>

      <div className="home-body">
        <img
          src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
          alt=""/>
          <div className="home-inputContainer">
            <Search  />
          </div>
      </div>
    </div>
  );
};

export default Home;
