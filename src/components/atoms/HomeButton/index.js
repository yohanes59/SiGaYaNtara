import React from 'react';
import { HomeIcon } from '../../../assets';
import "./homeButton.css";

const HomeButton = () => {
  return (
    <>
      <article className="d-flex flex-row justify-content-end px-3">
        <a className="back-to-home py-1" href="/"><img className="home-icon p-3" href="/" src={HomeIcon} alt="Home Icon" />Kembali ke Beranda</a>
      </article>
    </>
  )
}

export default HomeButton