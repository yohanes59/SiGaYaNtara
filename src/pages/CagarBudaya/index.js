import React, { useState, useEffect } from 'react';
import { Gap, HeroElement, Loading } from '../../components';
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
  const isLoginHandler = props.user;

  const isLogin = (
    <section className="button-bar">
      <a className="button" href="/upload" type="button">Unggah Cagar Budaya</a>
    </section>
  )

  const isNotLogin = (
    <section className="button-bar">
      <a className="button" href="/login" type="button">Unggah Cagar Budaya</a>
    </section>
  )

  if (loading === true) {
    return (
      <>
        <header className="container">
          <div className="list-text text-center">
            <p tabIndex="0">Daftar Cagar Budaya</p>

            {isLoginHandler ? isLogin : isNotLogin}

          </div>
          <HeroElement src={CagarBudayaImage} alt="Candi Prambanan" />
        </header>
        <Gap height={300} />
        <article className="container" id="content">
          <section className="row row-cols-1 row-cols-md-3 g-4">
            {cultureHeritageList}
          </section>
        </article>
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