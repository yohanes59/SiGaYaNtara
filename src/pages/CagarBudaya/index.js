import React, { useState, useEffect } from 'react';
import { Gap, Card, Pagination, HeroElement, Button } from '../../components';
import { CagarBudayaImage } from '../../assets';
import "./cagarBudaya.css";

const CagarBudaya = (props) => {
  const [dataCagar, setDataCagar] = useState([]);

  useEffect(() => {
    fetch('https://sigayantara-api.herokuapp.com/v1/cultural-heritage', {
      withCredentials: true,
    })
      .then((data) => data.json())
      .then((data) => setDataCagar(data.data))
  }, []);

  // status button
  let buttonStatus;
  // status button ketika belum login
  if (!props.user) {
    buttonStatus = (
      <p>tes</p>
    );
  } else {
    // status button ketika sudah login
    buttonStatus = (
      <Button name="Unggah Cagar Budaya" />
    );
  }
  return (
    <>
      <div className="container">
        <div className="heading-title text-left">
          <h2 className="text-capitalize">Daftar Cagar Budaya</h2>
          <Gap height={20} />
          {buttonStatus}
        </div>
        <HeroElement src={CagarBudayaImage} alt="Candi Prambanan" />
      </div>
      <Gap height={300} />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {dataCagar.map(item => {
            return <Card key={item._id} src={`http://sigayantara-api.herokuapp.com/v1/${item.image}`} alt={item.nama} title={item.nama} city={item.kabupaten} category={item.jenis} />
          })}
        </div>
      </div>
      <Gap height={60} />
      <Pagination />
      <Gap height={40} />
    </>
  )
}

export default CagarBudaya;