import React from 'react'
import { LogoHomepage } from '../../../assets'
import './footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start w-100 h-auto">
      <section className="sigayantara-footer d-flex justify-content-center p-3">
        <img src={LogoHomepage} alt="Logo SiGayantara" className="logo-sigayantara" tabIndex="0" />
        <p className="footer-text text-center text-white fw-bold ms-3 my-0 p-1" tabIndex="0">Sistem Informasi<br />Cagar Budaya Indonesia</p>
      </section>
      <section className="text-center px-3 pb-3">
        <p className="m-0 text-white" tabIndex="0">© 2022. SiGayantara, All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer