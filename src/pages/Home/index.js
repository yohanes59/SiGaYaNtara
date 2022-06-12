import React from "react";
import { Gap, HeroElement, About, Teams } from "../../components";
import { HomepageImage } from "../../assets";
import "./home.css";

const Home = () => {

    return (
        <div>
            {/* hero element */}
            <div className="jumbotron">
                <HeroElement src={HomepageImage} alt="Candi Borobudur" />
            </div>

            <Gap height={300} />

            {/* menu*/}
            <div className="container">
                <div className="row menus">
                    <Gap height={20} />

                </div>
            </div>
            <Gap height={70} />

            {/* eksplor cagar budaya */}
            <section id="explor-cagar">
                <div className="container">
                    <div className="row">
                        <div className="heading-title text-center">
                            <h3 className="text-uppercase">Eksplor Cagar Budaya</h3>
                        </div>
                        <Gap height={50} />

                        {/* ................... */}


                    </div>
                    <Gap height={50} />
                </div>
            </section>

            {/* TENTANG */}
            <About />
            {/* tim */}
            <Teams />
        </div>
    )
}

export default Home;