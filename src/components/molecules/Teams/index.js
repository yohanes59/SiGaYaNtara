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
        <div className="wrapper">
            < TeamItem nama="Shandra Elvyra S.P." section="Front-End" src={Foto} alt="Foto Shandra" />
            <TeamItem nama="Nilam Setyoningrum" section="Front-End" src={Foto} alt="Foto Nilam" />
            <TeamItem nama="Yohanes Cahyadi" section="Back-End" src={Foto} alt="Foto Yohanes" />
            <TeamItem nama="Darian Gunawan" section="Back-End" src={Foto} alt="Foto Darian" />
        </div>
    </div>
  )
}

export default Teams
