import React from "react";
import { Gap, TimItem } from "../../components";
import { Foto } from "../../assets";
import Tentang from "../../components/molecules/Tentang";

const Home = () => {
    return (
        <div>
            {/* TENTANG DIBAWAH DISINI */}
            <Tentang />

            {/* tim */}
            <div class="container">
                <div class="row">
                    <div class="heading-title text-center">
                        <h3 class="text-uppercase">Our Team</h3>
                    </div>
                    <Gap height={50}/>
                    <TimItem nama="shandra elvyra sudarsono putri" section="front-end" src={Foto} />
                    <TimItem nama="nilam setyoningrum" section="front-end" src={Foto} />
                    <TimItem nama="yohanes cahyadi" section="back-end" src={Foto} />
                    <TimItem nama="darian rendrahadi gunawan" section="back-end" src={Foto} />
                </div>
            </div>
        </div>
    )
}

export default Home;