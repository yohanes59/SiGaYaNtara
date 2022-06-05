import React, { useEffect, useState } from "react";
import { Gap, Tentang, TimItem, EksplorItem, Pagination, HeroElement, Menu } from "../../components";
import { Foto, HomepageImage, BendaMenu, BangunanMenu, StrukturMenu, SitusMenu, KawasanMenu } from "../../assets";
import "./home.css";

const Home = () => {
    const [province, setProvince] = useState([]);
    const [jenis, setJenis] = useState([]);

    useEffect(() => {
        fetch('https://sigayantara-api.herokuapp.com/v1/cultural-heritage/provinsi/getList', {
            withCredentials: true,
        })
            .then((data) => data.json())
            .then((data) => setProvince(data.data))
    }, [])

    useEffect(() => {
        fetch('https://sigayantara-api.herokuapp.com/v1/cultural-heritage/jenis/getList', {
            withCredentials: true,
        })
            .then((data) => data.json())
            .then((data) => setJenis(data.data))
    }, [])
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

                    {jenis.map(item => {
                        if (item === 'Bangunan') {
                            return <Menu key={item} title={item} alt={item} src={BangunanMenu} />
                        } else if (item === 'Benda') {
                            return <Menu key={item} title={item} alt={item} src={BendaMenu} />
                        } else if (item === 'Kawasan') {
                            return <Menu key={item} title={item} alt={item} src={KawasanMenu} />
                        } else if (item === 'Situs') {
                            return <Menu key={item} title={item} alt={item} src={SitusMenu} />
                        } else {
                            return <Menu key={item} title={item} alt={item} src={StrukturMenu} />
                        }
                    })}

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

                        {province.map(item => { return <EksplorItem key={item} provincename={item} /> })}
                    </div>
                    <Gap height={50} />
                    <Pagination />
                    <Gap height={50} />
                </div>
            </section>

            {/* TENTANG */}
            <Tentang />
            {/* tim */}
            <div className="container">
                <div className="row">
                    <div className="heading-title text-center">
                        <h3 className="text-uppercase">Our Team</h3>
                    </div>
                    <Gap height={50} />
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