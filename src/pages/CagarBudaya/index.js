import React, { useState, useEffect } from 'react';
import { Gap, HeroElement, Loading } from '../../components';
import { CagarBudayaImage } from '../../assets';
import { getAllCultureHeritage } from '../../utils/culturalHeritageHandler';
import { createCultureHeritageList, createPagination } from '../../utils/templates/CultureHeritageListHelper';
import "./cagarBudaya.css";

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
    <section>
      <a className="btn-upload text-decoration-none bg-transparent rounded-pill mb-5" href="/upload" type="button">Unggah Cagar Budaya</a>
    </section>
  )

  const isNotLogin = (
    <section>
      <a className="btn-upload text-decoration-none bg-transparent rounded-pill mb-5" href="/login" type="button">Unggah Cagar Budaya</a>
    </section>
  )

  if (loading === true) {
    return (
      <>
        <article className="container">
          <article className="list-text text-center">
            <p tabIndex="0">Daftar Cagar Budaya</p>
            {isLoginHandler ? isLogin : isNotLogin}
          </article>
          <HeroElement src={CagarBudayaImage} alt="Candi Prambanan" />

          <article className="cards d-grid px-3" id="content">
            {cultureHeritageList}
          </article>

          <Gap height={100} />
          {pagination}
          <Gap height={48} />
        </article>
      </>
    )
  }
  return (
    <Loading />
  )
}

export default CagarBudaya;