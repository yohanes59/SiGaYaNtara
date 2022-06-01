import React from 'react';
import { Gap, Card, Pagination, HeroElement, Button} from '../../components';
import { HomepageImage, CagarBudayaImage } from '../../assets';
import "./cagarBudaya.css";



const CagarBudaya = () => {
  return (
    <>
    <div className="container">
      <div className="heading-title text-left">
          <h2 className="text-capitalize">Daftar Cagar Budaya</h2>
          <Gap height={20}/>
          <Button name="Unggah Cagar Budaya"/>
      </div>
        <HeroElement src={CagarBudayaImage} alt="Candi Prambanan"/>
    </div>
      <Gap height={300}/>
          <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <Card src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" />
              <Card src={CagarBudayaImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
              <Card src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
              <Card src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" />
              <Card src={CagarBudayaImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
              <Card src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
              <Card src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" />
              <Card src={CagarBudayaImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
              <Card src={HomepageImage} alt="Candi Borobudur" title="Candi Borobudur" city="Yogyakarta" category="Bangunan" /> 
            </div>
          </div>
      <Gap height={60} />
      <Pagination />
      <Gap height={40} />
    </>
  )
}

export default CagarBudaya;