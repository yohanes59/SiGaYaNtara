import React, { useState } from 'react';
import { CloseIcon, IconProfile, LogoHomepage, MenuIcon } from '../../../assets';
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
            <div className="d-flex">
                <a className="navbar-brand" href="/">
                    <img src={IconProfile} alt="Icon Profile" className="icon" />
                </a>
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
                <li className="nav-item">
                    <a className="nav-link" href="/">Beranda</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cagar">Cagar Budaya</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">Tentang</a>
                </li>
                {navStatus}
            </ul>
            <button className="mobile-menu"
            onClick={() => setIsMobile(!isMobile)}>
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