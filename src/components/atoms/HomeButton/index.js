import React from 'react';
import { HomeIcon } from '../../../assets';
import "./homeButton.css";

const HomeButton = () => {
  return (
    <>
        <div className="homeNav d-flex">
            <ul className="home-menu">
                <li><img src={HomeIcon} alt="Home Icon"/><a className="homeButton" href="/">Kembali ke Beranda</a></li>
            </ul>
        </div>
    </>
  )
}

export default HomeButton