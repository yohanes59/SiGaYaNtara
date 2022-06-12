import React, { useState, useEffect } from 'react';
import { Gap, HeroElement, Button, Loading } from '../../components';
import { CagarBudayaImage } from '../../assets';
import "./cagarBudaya.css";
import { getAllCultureHeritage } from '../../utils/culturalHeritageHandler';
import { createCultureHeritageList, createPagination } from '../../utils/templates/CultureHeritageListHelper';

const CagarBudaya = (props) => {
  const [dataCagar, setDataCagar] = useState([]);
  const [pageInformation, setPageInformation] = useState({});
  const [counter, setCounter] = useState(0);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCultureHeritage(counter)
      .then(res => {
        setLoading(true);
        setDataCagar(res.data);
        setPageInformation(res);
      })
  }, [counter])

  const cultureHeritageList = createCultureHeritageList(pageInformation, dataCagar)
  const pagination = createPagination(pageInformation, counter, setCounter);

  if (loading === true) {
    return (
      <>
        <div className="container">
          <div className="list-text text-center">
            <p tabIndex="0">Daftar Cagar Budaya</p>
            <Button name="Unggah Cagar Budaya" />
          </div>
          <HeroElement src={CagarBudayaImage} alt="Candi Prambanan" />
        </div>
        <Gap height={300} />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cultureHeritageList}
          </div>
        </div>
        <Gap height={60} />
        {pagination}
        <Gap height={40} />
      </>
    )
  }
  return (
    <Loading />
  )
}

export default CagarBudaya;