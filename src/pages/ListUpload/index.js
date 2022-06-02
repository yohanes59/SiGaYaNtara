import React from 'react'
import { CagarBudayaImage, HomepageImage, ProfilePageImage } from '../../assets'
import { Button, Gap, HeroElement, Pagination, CardUpload } from '../../components'
import './listUpload.css'

const ListUpload = () => {
  return (
    <div className="container">
        <div className="head-container">
            <div className="heading-title">
                <h2 className="text-start upload-text">Daftar Unggahan</h2>
                <Gap height={50}/>
                <Button name="Unggah Cagar Budaya"/>
            </div>
            <HeroElement src={ProfilePageImage} alt="beach" />
        </div>
        <Gap height={200}/>
        <div className="body-container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <CardUpload src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" />
                <CardUpload src={CagarBudayaImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
                <CardUpload src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
                <CardUpload src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" />
                <CardUpload src={CagarBudayaImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
                <CardUpload src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
                <CardUpload src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" />
                <CardUpload src={CagarBudayaImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
                <CardUpload src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
            </div>
        </div>
        <Gap height={60} />
        <Pagination />
        <Gap height={40} />
    </div>
  )
}

export default ListUpload;