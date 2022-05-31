import React from 'react';
import { LogoHomepage } from '../../../assets';
import "./header.css";

const Header = () => {
  return (
    <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={LogoHomepage} alt="Logo SiGayantara" className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Beranda</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/cagar">Cagar Budaya</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">Tentang</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="button" type="submit">Masuk</button>
                    </div>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Header