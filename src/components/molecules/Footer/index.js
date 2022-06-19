import React from 'react'
import { LogoHomepage } from '../../../assets'
import './footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start w-100 h-auto">
      <section className="sigayantara-footer d-flex justify-content-center p-3">
        <img src={LogoHomepage} alt="Logo SiGayantara" className="logo-sigayantara" tabIndex="0" />
        <p className="footer-text text-center text-white my-0 p-1" tabIndex="0">Sistem Informasi<br /><b>Cagar Budaya Indonesia</b></p>
      </section>
      <section className="text-center text-white px-3 pb-3">
        <p className="m-0" tabIndex="0">© 2022. SiGayantara, All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer