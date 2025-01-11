import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import "./header.css";
import LanguageDropdown from "./Language/language";
import { Link } from "react-router-dom";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        const body = document.body;
        if (isDarkTheme) {
            body.classList.remove("dark-theme");
        } else {
            body.classList.add("dark-theme");
        }
    };

    const toggleGithub = () => {
        window.open("https://github.com/omsairamkurra", "_blank");
    };

    const toggleLinkedin = () => {
        window.open("https://www.linkedin.com/in/omsairamkurra/", "_blank");
    };

    return (
        <div className={`header-container ${isSidebarOpen ? "stretched" : ""}`}>
            <div className="item" onClick={toggleSidebar}>
                <Tooltip title="Menu">
                    <MenuIcon />
                </Tooltip>
            </div>
            <div className="item">
                <Link to="/" className="link">
                    <Tooltip title="Home">
                        <HomeIcon style={{ cursor: "pointer" }} />
                    </Tooltip>
                </Link>
            </div>
            <div>
                <input className="search-bar" type="search" placeholder="Search..." />
            </div>
            <div>
                <LanguageDropdown isDarkTheme={isDarkTheme} />
            </div>
            <div className="item">
                <Tooltip title="Github Profile">
                    <GitHubIcon onClick={toggleGithub} />
                </Tooltip>
            </div>
            <div className="item">
                <Tooltip title="LinkedIn">
                    <LinkedInIcon onClick={toggleLinkedin} />
                </Tooltip>
            </div>
            <div className="item">
                <Link to="/about" className="link">
                    <Tooltip title="About">
                        <InfoIcon style={{ cursor: "pointer" }} />
                    </Tooltip>
                </Link>
            </div>
            <div className="item">
                <Tooltip title="Change Theme">
                    <Brightness4Icon
                        onClick={toggleTheme}
                        style={{ cursor: "pointer", color: isDarkTheme ? "white" : "black" }}
                    />
                </Tooltip>
            </div>
        </div>
    );
};

export default Header;
