import React, { useState } from 'react';
import { CloseIcon, IconProfile, LogoHomepage, MenuIcon } from '../../../assets';
import "./header.css";
import { userLogout } from '../../../utils/UserHandler';

const Header = (props) => {
    let navStatus;
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

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
            <div className="d-flex action">
                <div className="profile">
                    <a className="navbar-brand" onClick={toggling}>
                        <img src={IconProfile} alt="Icon Profile" className="icon"/>
                    </a>
                </div> 
                {isOpen && (
                    <div className="profile-menu">
                    <ul className="nav-profile">
                    <li className="">
                        <p>Welcome back,</p>
                    </li>
                    <li className="">
                        <p>{props.user.fullName}</p>
                    </li>
                    <li className="">
                        <a className="nav-menu" href="/profile">Daftar Unggahan</a>
                    </li>
                    <li className="">
                        <a className="nav-menu" onClick={userLogout}>Keluar</a>
                    </li>
                </ul>
                </div>
                )}
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