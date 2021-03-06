import React from 'react'
import TeamItem from '../TeamItem'
import { ShandraE, DarianG, YohanesC, NilamS } from '../../../assets'
import "./teams.css"

const Teams = () => {
  return (
    <article className="container">
      <section className="text-center" tabIndex="0">
        <h2 className="teams-title">Tim Kami</h2>
      </section>
      <section className="wrapper mb-5">
        <TeamItem nama="Shandra Elvyra S. P." section="Front-End" src={ShandraE} alt="Foto Shandra" href="https://github.com/shandraelvyra" />
        <TeamItem nama="Nilam S." section="Front-End" src={NilamS} alt="Foto Nilam" href="https://github.com/nilamsty" />
        <TeamItem nama="Darian Gunawan" section="Front-End" src={DarianG} alt="Foto Darian" href="https://github.com/dariangunawan" />
        <TeamItem nama="Yohanes Cahyadi" section="Back-End" src={YohanesC} alt="Foto Yohanes" href="https://github.com/yohanes59" />
      </section>
    </article>
  )
}

export default Teams