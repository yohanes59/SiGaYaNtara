import React from 'react';
import { LogoHomepage } from '../../../assets';
import { IconProfile } from '../../../assets';

const HeaderProfile = () => {
  return (
    <>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={LogoHomepage} alt="Logo SiGayantara" class="d-inline-block align-text-top"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link navlink active" aria-current="page" href="/">Beranda</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link navlink" href="/cagar">Cagar Budaya</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link navlink" id="navlink" href="/about">Tentang</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a className="navbar-brand" href="/profile">
                            <img src={IconProfile} alt="Icon Profile" class="icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default HeaderProfile