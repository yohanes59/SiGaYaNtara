import React, { useState, useEffect } from 'react';
import { Gap, HeroElement, Button } from '../../components';
import { CagarBudayaImage } from '../../assets';
import "./cagarBudaya.css";
import { getAllCultureHeritage } from '../../utils/culturalHeritageHandler';
// import { getAllCultureHeritageByJenis } from '../../utils/culturalHeritageHandler';
import { createCultureHeritageList, createPagination } from '../../utils/templates/CultureHeritageListHelper';

const CagarBudaya = (props) => {
  const [dataCagar, setDataCagar] = useState([]);
  // const [dataJenis, setDataJenis] = useState([]);
  const [pageInformation, setPageInformation] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getAllCultureHeritage(counter)
      .then(res => {
        setDataCagar(res.data);
        setPageInformation(res);
      })
  }, [counter])

//   useEffect(() => {
//     const compareJenis = props.match.params.jenis;
//     console.log(compareJenis);
//     getAllCultureHeritageByJenis(compareJenis)
//       .then((res) => {
//         setDataJenis(res)
//         setPageInformation(res);
//       })
// }, [props, dataJenis]);

// const cultureHeritageListJenis = createCultureHeritageList(pageInformation, dataJenis)
const cultureHeritageList = createCultureHeritageList(pageInformation, dataCagar)
const pagination = createPagination(pageInformation, counter, setCounter);

return (
  <>
    <div className="container">
      <div className="heading-title text-left">
        <h2 className="text-capitalize">Daftar Cagar Budaya</h2>
        <Gap height={100} />
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

export default CagarBudaya;