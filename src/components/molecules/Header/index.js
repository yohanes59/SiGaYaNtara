import React from 'react';
import { LogoHomepage } from '../../../assets';
import "./header.css";

const Header = () => {
  return (
    <section id="header">
        <div expand="md" class="px-0 px-lg-4">
            <div class="navbar d-flex align-item-center">
                <img class="logo-img" src={LogoHomepage} alt="Logo SiGayantara"/>

                <ul class="nav justify-content-center">
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
                    <button id="button">Masuk</button>
            </div>
        </div>
    </section>
  )
}

export default Header