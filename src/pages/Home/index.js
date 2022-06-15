import React from "react";
import { HeroElement, About, Teams, AboutCagar, Category } from "../../components";
import { HomepageImage } from "../../assets";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="jumbotron">
                <HeroElement src={HomepageImage} alt="Candi Borobudur" />
                <div className="home-content d-flex flex-column justify-content-center">
                    <h1 className="home-title text-center" tabIndex="0">SiGayantara</h1>
                    <p className="home-desc text-center" tabIndex="0">Tempat untuk mencari berbagai informasi seputar Cagar Budaya yang ada di Indonesia.</p>
                    <div className="scroll-button">
                        <a href="#about-cagar" className="anchor-cagar">
                            <button className="scroll-down"></button>
                        </a>
                    </div>
                </div>
            </div>
            <AboutCagar/>
            <Category />
            <About />
            <Teams />
        </div>
    )
}

export default Home;