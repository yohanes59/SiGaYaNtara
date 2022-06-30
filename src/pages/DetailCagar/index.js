import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Gap, Loading } from '../../components/atoms';
import { withRouter } from 'react-router-dom'
import { deleteCulturalHeritage, getDetailCultureHeritage } from '../../utils/culturalHeritageHandler';
import { AuthorIcon } from '../../assets';
import './detailCagar.css'

const DetailCagar = (props) => {
    const [detailData, setDetailData] = useState({});
    let [loading, setLoading] = useState(false);
    let [pageLoad, setPageLoad] = useState(false);

    useEffect(() => {
        const id = props.match.params.id;
        getDetailCultureHeritage(id)
            .then(result => {
                setPageLoad(true);
                setDetailData(result);
            })
            .catch(err => {
                console.log('error : ', err);
            })
    })

    const isClickedHandler = true;

    const handleClick = () => {
        swal({
            title: "Hapus Data Cagar Budaya?",
            text: "Data cagar budaya akan dihapus permanen",
            icon: "warning",
            buttons: ["Batal", "Ok"],
            dangerMode: true,
        })
            .then((deleteData) => {
                if (deleteData) {
                    const id = props.match.params.id;
                    setLoading(true);
                    deleteCulturalHeritage(id);
                }
            })
    }
    const isLoginHandler = props.user;

    const isLogin = (
        <article className="card-action px-3">
            <ul className="d-flex flex-row justify-content-end mb-3">
                <li className="edit-card d-flex flex-row align-items-center justify-content-center list-unstyled">
                    <a href={`/edit/${props.match.params.id}`} className="d-inline-block text-decoration-none fs-6 text-primary fw-bold text-start">Edit</a>
                </li>
                <li className="strip d-flex flex-row align-items-center justify-content-center list-unstyled"> | </li>
                <li className="delete-card d-flex flex-row align-items-center justify-content-center list-unstyled">
                    <button onClick={isClickedHandler ? handleClick : undefined} className="text-danger fw-bold border-0 bg-transparent">Hapus</button>
                </li>
            </ul>
        </article>
    )

    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    const toggleTab = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    if (loading === true) {
        return (
            <Loading />
        )
    }

    if (pageLoad === true) {
        if (detailData.author) {
            return (
                <article className="container detail-content" id="content">
                    <article className="cat-img position-relative px-3">
                        <img className="cagar-img w-100 shadow-sm" src={`https://res.cloudinary.com/dqxruyist/image/upload/${detailData.cloudinary_id}`} alt="gambar cagar budaya" tabIndex="0"/>
                        <p className="shadow-cat-card border-top-0"></p>
                        <p className="category-card text-center text-uppercase fw-bold pt-2" tabIndex="0">{detailData.jenis}</p>
                    </article>

                    <article>
                    <p className="cagar-title px-3 text-uppercase fw-bold mt-5 mb-3" tabIndex="0">{detailData.nama}</p>
                    </article>

                    <article className="d-flex flex-row px-3 my-3" tabIndex="0">
                        <img className="author-icon text-center" src={AuthorIcon} alt="penulis" />
                        <section className="author-info d-flex flex-column">
                            <p className="author fw-bold m-0">{detailData.author.user_fullName}</p>
                            <p className="date m-0">{new Date(detailData.createdAt).toLocaleDateString("id-ID")}</p>
                        </section>
                        <Gap height={15} />
                    </article>
                    
                    {isLoginHandler ? isLogin : undefined}

                    <article className="mb-5 px-3">
                        <Nav tabs>
                            <NavItem>
                                <NavLink className={currentActiveTab === '1' ? "tabs-active-tabs" : "tabs"} 
                                tabIndex="0" 
                                onKeyDown={() => { toggleTab('1'); }}
                                onClick={() => { toggleTab('1'); }}>
                                    Keberadaan
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={currentActiveTab === '2' ? "tabs-active-tabs" : "tabs"} 
                                tabIndex="0" 
                                onKeyDown={() => { toggleTab('2'); }}
                                onClick={() => { toggleTab('2'); }}>
                                    Sejarah
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={currentActiveTab === '3' ? "tabs-active-tabs" : "tabs"} 
                                tabIndex="0" 
                                onKeyDown={() => { toggleTab('3'); }}
                                onClick={() => { toggleTab('3'); }}>
                                    Deskripsi
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={currentActiveTab} className="shadow">
                            <TabPane tabId="1">
                                <article className="row">
                                    <section className="col-sm-12">
                                        <p className="px-1 pt-2">Provinsi: <span>{detailData.provinsi}</span></p>
                                        <p className="px-1">Kabupaten/ Kota: <span>{detailData.kabupaten}</span></p>
                                    </section>
                                </article>
                            </TabPane>
                            <TabPane tabId="2">
                                <article className="row">
                                    <section className="col-sm-12">
                                        <p className="px-1 pt-2 text-break">{detailData.sejarah}</p>
                                    </section>
                                </article>
                            </TabPane>
                            <TabPane tabId="3">
                                <article className="row">
                                    <section className="col-sm-12">
                                        <p className="px-1 pt-2 text-break">{detailData.description}</p>
                                    </section>
                                </article>
                            </TabPane>
                        </TabContent>
                    </article>
                </article>
            )
        }
    }
    return (
        <Loading />
    )
}

export default withRouter(DetailCagar)