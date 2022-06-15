import React from 'react'
import TeamItem from '../TeamItem'
import { Foto } from '../../../assets'

import "./teams.css"

const Teams = () => {
  return (
    <div className="container">
      <div className="text-center" tabIndex="0">
        <h2 className="teams-title">Tim Kami</h2>
      </div>
      <div className="wrapper mb-5">
        <TeamItem nama="Shandra Elvyra S. P." section="Front-End" src={Foto} alt="Foto Shandra" />
        <TeamItem nama="Nilam S." section="Front-End" src={Foto} alt="Foto Nilam" />
        <TeamItem nama="Darian Gunawan" section="Front-End" src={Foto} alt="Foto Darian" />
        <TeamItem nama="Yohanes Cahyadi" section="Back-End" src={Foto} alt="Foto Yohanes" href="https://github.com/yohanes59" />
      </div>
    </div>
  )
}

export default Teams