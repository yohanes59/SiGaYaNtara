import React, { useState } from 'react';
import { CloseIcon, IconProfile, LogoHomepage, MenuIcon } from '../../../assets';
import { userLogout } from '../../../utils/UserHandler';
import "./header.css";

const Header = (props) => {
    let navStatus;
    if (!props.user) {
        navStatus = (
            <>
                <div className="d-flex">
                    <a href="/login" className="button-a" role="button">Masuk</a>
                </div>
            </>
        );
    } else {
        navStatus = (
            <nav className="dropdown">
                <button className="dropdown-title" type="button" aria-expanded="false" aria-controls="profile-dropdown">
                    <img src={IconProfile} alt="Icon Profile" className="profile-icon" />
                </button>
                <section className="dropdown-menus" id="profile-dropdown">
                    <p tabIndex="0">Hai, {props.user.fullName}</p>
                    <button className="nav-logout" type="button" onClick={userLogout}>Keluar</button>
                </section>
            </nav>
        );
    }

    const [isMobile, setIsMobile] = useState(false);
    const [colorChange, setColorChange] = useState(false);
    
    const navbarColorChange = () => {
        if(window.scrollY >= 50){
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };
    window.addEventListener("scroll", navbarColorChange);

    return (
        <nav className={colorChange ? "navbar-color-change fixed-top" : "navbar fixed-top"}>
            <a href="/"><img src={LogoHomepage} alt="Logo SiGayantara" className="logo"/></a>
            <ul className={isMobile ? "nav-menus-mobile": "nav-menus"}
            onClick={() => setIsMobile(false)}>
                <li><a className="nav-link" href="/">Beranda</a></li>
                <li><a className="nav-link" href="/cagar">Cagar Budaya</a></li>
                <li><a className="nav-link" href="/about">Tentang</a></li>
                <div className="dropdown-divider"></div>
                {navStatus}
            </ul>
            <button className="mobile-menu"
            onClick={() => setIsMobile(!isMobile)} tabIndex="1">
                {isMobile ? ( 
                    <img src={CloseIcon} alt="close icon" />
                ) : (
                    <img src={MenuIcon} alt="menu icon" />
                )}
            </button>
        </nav>
    )
}

export default Header