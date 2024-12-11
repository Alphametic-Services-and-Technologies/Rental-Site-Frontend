import "./Navbar.css";

import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../assets/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-main-container">
      <div className="navbar-container">
        <a href="#" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="navbar-link-container">
          <a href="#action1" className="nav-link">
            MarketPlace
          </a>
          <a href="#action2" className="nav-link">
            About us
          </a>
          <a href="#action3" className="nav-link">
            Developers
          </a>
        </div>
        <div className="navbar-button-container">
          <span className="line" />
          <IconButton className="fa-heart">
            <FavoriteBorderIcon />
          </IconButton>
          <Button className="nav-button" variant="contained" color="primary">
            Connect Wallet
          </Button>
        </div>
        <div className="navbar-menu-container">
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon sx={{ width: 40, height: 40, color: "#FFF" }} />
          </IconButton>
        </div>
      </div>
      {open && (
        <div className="navbar-second-link-container">
          <a href="#action1" className="nav-link">
            MarketPlace
          </a>
          <a href="#action2" className="nav-link">
            About us
          </a>
          <a href="#action3" className="nav-link">
            Developers
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
