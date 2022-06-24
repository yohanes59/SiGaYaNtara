import React from "react";
import { HeroElement, About, Teams, AboutCagar, Category } from "../../components";
import { HomepageImage } from "../../assets";
import "./home.css";

const Home = () => {
    return (
        <>
            <article className="jumbotron">
                <HeroElement src={HomepageImage} alt="Candi Borobudur" />
                <section className="home-content d-flex flex-column justify-content-center">
                    <h1 className="home-title text-center" tabIndex="0">SiGayantara</h1>
                    <p className="home-desc text-center" tabIndex="0">Tempat untuk mencari berbagai informasi seputar Cagar Budaya yang ada di Indonesia.</p>
                    <section className="scroll-button">
                        <a href="#about-cagar" className="anchor-cagar">
                            <button className="scroll-down bg-transparent justify-content-center cursor-pointer p-0" aria-label="scroll" tabIndex="-1"></button>
                        </a>
                    </section>
                </section>
            </article>
            <AboutCagar/>
            <Category />
            <About />
            <Teams />
        </>
    )
}

export default Home;