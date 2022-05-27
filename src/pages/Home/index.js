import React from "react";
import { Gap, Tentang, TimItem } from "../../components";
import { Foto } from "../../assets";




const Home = () => {
    return (
        <div>
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