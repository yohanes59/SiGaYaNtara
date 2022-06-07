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
                <li>
                    <button className="dropdown-title" type="button" aria-expanded="false" aria-controls="profile-dropdown">
                        <img src={IconProfile} alt="Icon Profile" className="profile-icon" />
                    </button>
                    <ul className="dropdown-menus" id="profile-dropdown">
                        <li><a href="/profile"> Hai, {props.user.fullName}</a></li>
                        <li><a href="/profile">Daftar Unggahan</a></li>
                        <li><a className="nav-logout" role="button" href="#" onClick={userLogout}>Keluar</a></li>
                    </ul>
                </li>
            </div>
        );
    }

    const [isMobile, setIsMobile] = useState(false);
    
    return (
        <nav className="navbar">
            <a className="justify-content-center mx-3" href="/">
                <img src={LogoHomepage} alt="Logo SiGayantara" />
            </a>

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