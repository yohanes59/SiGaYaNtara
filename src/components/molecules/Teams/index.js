import React from 'react'
import TeamItem from '../TeamItem'
import { Foto, Darian, yohanes, Nilam } from '../../../assets'

import "./teams.css"

const Teams = () => {
  return (
    <section className="container">
      <section className="text-center" tabIndex="0">
        <h2 className="teams-title">Tim Kami</h2>
      </section>
      <section className="wrapper mb-5">
        <TeamItem nama="Shandra Elvyra S. P." section="Front-End" src={Foto} alt="Foto Shandra" />
        <TeamItem nama="Nilam S." section="Front-End" src={Nilam} alt="Foto Nilam" />
        <TeamItem nama="Darian Gunawan" section="Front-End" src={Darian} alt="Foto Darian" href="https://github.com/dariangunawan" />
        <TeamItem nama="Yohanes Cahyadi" section="Back-End" src={yohanes} alt="Foto Yohanes" href="https://github.com/yohanes59" />
      </section>
    </section>
  )
}

export default Teams