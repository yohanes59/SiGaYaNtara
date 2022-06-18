import React from 'react'
import { LogoHomepage } from '../../../assets'
import './footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" tabIndex="0">
      <section className="d-flex justify-content-center p-3">
        <img src={LogoHomepage} alt="Logo SiGayantara" className="logo-sigayantara"/>
        <p className="footer-text text-center text-white m-0 p-1">Sistem Informasi<br /><b>Cagar Budaya Indonesia</b></p>
      </section>
      <section className="text-center text-white p-3">
        <p className="m-0">© 2022. SiGayantara, All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer