import React from "react";
import { Gap, HeroElement, About, Teams, AboutCagar, Category } from "../../components";
import { HomepageImage } from "../../assets";
import "./home.css";

const Home = () => {
    return (
        <div>
            {/* hero element */}
            <div className="jumbotron">
                <HeroElement src={HomepageImage} alt="Candi Borobudur" />
                <div className="home-content">
                    <h1 className="home-title">SiGayantara</h1>
                    <p className="home-desc">Tempat untuk mencari berbagai informasi seputar Cagar Budaya yang ada di Indonesia</p>
                    <div className="scroll-button">
                        <a href="#about-cagar" className="anchor-cagar">
                            <div className="scroll-down"></div>
                        </a>
                    </div>
                </div>
            </div>

            <Gap height={300} />

            {/* menu*/}
            <div className="container">
                <AboutCagar/>
            </div>

            <Gap height={100} />

            {/* jenis cagar budaya */}
            <Category />

            {/* tentang */}
            <About />

            {/* tim */}
            <Teams />
            
            <Gap height={80}/>
        </div>
    )
}

export default Home;