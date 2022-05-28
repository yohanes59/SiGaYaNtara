import React from 'react';
import { LogoHomepage } from '../../../assets';
import "./header.css";

const Header = () => {
  return (
    <section id="header">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={LogoHomepage} alt="Logo SiGayantara" class="d-inline-block align-text-top"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Beranda</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/cagar">Cagar Budaya</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/about">Tentang</a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <button class="button" type="submit">Masuk</button>
                    </div>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Header