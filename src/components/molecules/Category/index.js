import React from 'react'
import { Gap } from '../../atoms'
import CardJenis from '../CardJenis'
import { BendaMenu, BangunanMenu, StrukturMenu, KawasanMenu, SitusMenu } from '../../../assets'
import './category.css'

const Category = () => {
  return (

    <div className="container">
        <div className="heading-title text-center" tabIndex="0">
            <h3 className="text">Jenis Cagar Budaya</h3>
        </div>
        
        <Gap height={50} />

        <div className="wrapper-card">
            <CardJenis src={BendaMenu} alt="Icon Vas" title="Benda" 
                text="Benda alami atau buatan manusia, baik bergerak atau tidak, yang punya hubungan erat dengan kekayaan dan sejarah perkembangan manusia"/>
            <CardJenis src={BangunanMenu} alt="Icon Rumah" title="Bangunan" 
                text="Susunan binaan yang terbuat dari benda alam atau benda buatan manusia untuk memenuhi kebutuhan ruang berdinding, tidak berdinding dan atau beratap"/>
            <CardJenis src={KawasanMenu} alt="Icon Peta" title="Kawasan" 
                text="Satuan ruang geografis yang memiliki dua Situs Cagar Budaya atau lebih yang letaknya berdekatan dan atau memperlihatkan ciri tata ruang yang khas"/>
            <CardJenis src={SitusMenu} alt="Icon Benteng" title="Situs" 
                text="Lokasi yang berada di darat dan atau di air yang mengandung Benda Cagar Budaya, Bangunan Cagar Budaya, dan atau Struktur Cagar Budaya sebagai hasil kegiatan manusia atau bukti kejadian pada masa lalu"/>
            <CardJenis src={StrukturMenu} alt="Icon Jembatan" title="Struktur" 
                text="Suatu susunan binaan yang terbuat dari benda alam dan atau benda buatan manusia untuk memenuhi kebutuhan ruang kegiatan yang menyatu dengan alam, sarana dan prasarana untuk menampung kebutuhan manusia"/>
        </div>
    </div>
  )
}

export default Category