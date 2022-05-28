import React from "react";
import { Gap, Tentang, TimItem, EksplorItem, Pagination, HeroElement, Menu } from "../../components";
import { Foto, HomepageImage, BendaMenu, BangunanMenu, StrukturMenu, SitusMenu, KawasanMenu } from "../../assets";
import "./home.css";

const Home = () => {
    return (
        <div>
            {/* hero element */}
            <div class="jumbotron">
                <HeroElement src={HomepageImage} alt="Candi Borobudur"/>
            </div>
           
            <Gap height={300}/>

            {/* menu*/}
            <div class="container">
                    <div class="row menus">
                        <Gap height={20}/>
                        <Menu title="Benda" src={BendaMenu} alt="Icon Guci"/>
                        <Menu title="Bangunan" src={BangunanMenu} alt="Icon Rumah"/>
                        <Menu title="Struktur" src={StrukturMenu} alt="Icon Jembatan"/>
                        <Menu title="Situs" src={SitusMenu} alt="Icon Benteng"/>
                        <Menu title="Kawasan" src={KawasanMenu} alt="Icon Peta"/>
                    </div>
                </div>
                <Gap height={70}/>

            {/* eksplor cagar budaya */}
            <section id="explor-cagar">
                <div class="container">
                    <div class="row">
                        <div class="heading-title text-center">
                            <h3 class="text-uppercase">Eksplor Cagar Budaya</h3>
                        </div>
                        <Gap height={50}/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                        <EksplorItem cityname="DKI Jakarta"/>
                    </div>
                    <Gap height={50}/>
                    <Pagination/>
                    <Gap height={50}/>
                </div>
            </section>

            {/* TENTANG */}
            <Tentang />
            {/* tim */}
            <div class="container">
                <div class="row">
                    <div class="heading-title text-center">
                        <h3 class="text-uppercase">Our Team</h3>
                    </div>
                    <Gap height={50}/>
                    <TimItem nama="shandra elvyra s.p." section="front-end" src={Foto} />
                    <TimItem nama="nilam setyo ningrum" section="front-end" src={Foto} />
                    <TimItem nama="yohanes cahyadi" section="back-end" src={Foto} />
                    <TimItem nama="darian gunawan" section="back-end" src={Foto} />
                </div>
            </div>
        </div>
    )
}

export default Home;