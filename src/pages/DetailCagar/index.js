import React, { useEffect, useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Gap, Loading } from '../../components/atoms';
import './detailCagar.css'
import { withRouter } from 'react-router-dom'
import { deleteCulturalHeritage, getDetailCultureHeritage } from '../../utils/culturalHeritageHandler';
import swal from 'sweetalert';
import { AuthorIcon } from '../../assets';

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
        <div className="card-action">
            <ul className="d-flex flex-row justify-content-end">
                <li className="edit-card">
                    <a href={`/edit/${props.match.params.id}`} className="d-inline-block text-decoration-none fs-6 text-primary fw-bold text-start">Edit</a>
                </li>
                <li> | </li>
                <li className="delete-card">
                    <button onClick={isClickedHandler ? handleClick : undefined} className="text-danger fw-bold border-0 bg-transparent">Hapus</button>
                </li>
            </ul>
        </div>
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
                <div className="container detail-content">
                    <div className="cat-img">
                        <img className="cagar-img" src={`https://sigayantara-api.herokuapp.com/v1/${detailData.image}`} alt="gambar cagar budaya" tabIndex="0"/>
                        <p className="shadow-cat-card border-top-0"></p>
                        <p className="category-card text-center text-uppercase fw-bold pt-2" tabIndex="0">{detailData.jenis}</p>
                    </div>

                    <div className="cagar-title">
                        <p className="text-uppercase fw-bold mt-5 mb-3" tabIndex="0">{detailData.nama}</p>
                    </div>

                    <div className="upload-info d-flex flex-row" tabIndex="0">
                        <img className="author-icon" src={AuthorIcon} alt="penulis" />
                        <div className="author-info d-flex flex-column">
                            <p className="author fw-bold m-0">{detailData.author.user_fullName}</p>
                            <p className="date m-0">{new Date(detailData.createdAt).toLocaleDateString("id-ID")}</p>
                        </div>
                        <Gap height={15} />
                    </div>

                    <div className="action">
                        {isLoginHandler ? isLogin : undefined}
                    </div>

                    <div className="detail-info mt-3 mb-5">
                        <Nav tabs>
                            <NavItem>
                                <NavLink className={currentActiveTab === '1' ? "tabs-active-tabs" : "tabs"} onClick={() => { toggleTab('1'); }}>
                                    Keberadaan
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={currentActiveTab === '2' ? "tabs-active-tabs" : "tabs"} onClick={() => { toggleTab('2'); }}>
                                    Sejarah
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={currentActiveTab === '3' ? "tabs-active-tabs" : "tabs"} onClick={() => { toggleTab('3'); }}>
                                    Deskripsi
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={currentActiveTab} className="shadow">
                            <TabPane tabId="1">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="px-1 pt-2">Provinsi: <span>{detailData.provinsi}</span></p>
                                        <p className="px-1">Kabupaten/ Kota: <span>{detailData.kabupaten}</span></p>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="px-1 pt-2 text-break">{detailData.sejarah}</p>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="3">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="px-1 pt-2 text-break">{detailData.description}</p>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            )
        }
    }
    return (
        <Loading />
    )
}

export default withRouter(DetailCagar)