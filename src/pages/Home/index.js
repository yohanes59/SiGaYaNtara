import React, { useEffect, useState } from "react";
import { Gap,  EksplorItem, Pagination, HeroElement, Menu, About, Teams } from "../../components";
import { HomepageImage, BendaMenu, BangunanMenu, StrukturMenu, SitusMenu, KawasanMenu } from "../../assets";
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

                    {jenis.map(jenis => {
                        if (jenis === 'Bangunan') {
                            return <Menu key={jenis} title={jenis} alt={jenis} src={BangunanMenu} href={`/cagar/${jenis}`} />
                        } else if (jenis === 'Benda') {
                            return <Menu key={jenis} title={jenis} alt={jenis} src={BendaMenu} href={`/cagar/${jenis}`} />
                        } else if (jenis === 'Kawasan') {
                            return <Menu key={jenis} title={jenis} alt={jenis} src={KawasanMenu} href={`/cagar/${jenis}`} />
                        } else if (jenis === 'Situs') {
                            return <Menu key={jenis} title={jenis} alt={jenis} src={SitusMenu} href={`/cagar/${jenis}`} />
                        } else {
                            return <Menu key={jenis} title={jenis} alt={jenis} src={StrukturMenu} href={`/cagar/${jenis}`} />
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

                        {province.map(item => {
                            return (
                                <EksplorItem key={item} provincename={item} />
                            )
                        })}
                    </div>
                    <Gap height={50} />
                    <Pagination />
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