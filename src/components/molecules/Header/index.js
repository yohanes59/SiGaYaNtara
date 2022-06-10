import React, { useState } from 'react';
import { CloseIcon, IconProfile, LogoHomepage, MenuIcon } from '../../../assets';
import "./header.css";
import { userLogout } from '../../../utils/UserHandler';

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
            <div className="dropdown">
                <button className="dropdown-title" type="button" aria-expanded="false" aria-controls="profile-dropdown">
                    <img src={IconProfile} alt="Icon Profile" className="profile-icon" />
                </button>
                <div className="dropdown-menus" id="profile-dropdown">
                    <p tabIndex="0">Hai, {props.user.fullName}</p>
                    <button className="nav-logout" type="button" onClick={userLogout}>Keluar</button>
                </div>
            </div>
        );
    }

    const [isMobile, setIsMobile] = useState(false);
    
    return (
        <nav className="navbar">
            <img src={LogoHomepage} alt="Logo SiGayantara" className="logo" tabIndex="0"/>
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