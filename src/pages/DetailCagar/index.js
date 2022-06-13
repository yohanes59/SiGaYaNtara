import React, { useEffect, useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Gap, Loading } from '../../components/atoms';
import './detailCagar.css'
import { withRouter } from 'react-router-dom'
import { deleteCulturalHeritage, getDetailCultureHeritage } from '../../utils/culturalHeritageHandler';
import swal from 'sweetalert';

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
            <ul className="action-menu">
                <li className="edit-card">
                    <a href={`/edit/${props.match.params.id}`} className="edit">Edit</a>
                </li>
                <li> | </li>
                <li className="delete-card">
                    <a onClick={isClickedHandler ? handleClick : undefined} className="delete">Hapus</a>
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
                <div className="container">
                    <div className="cat-img">
                        <img className="cagar-img" src={`https://sigayantara-api.herokuapp.com/v1/${detailData.image}`} alt="img" />
                        <p className="shadow-cat-card border-top-0"></p>
                        <p className="category-card text-center text-uppercase fw-bold pt-2">{detailData.jenis}</p>
                    </div>

                    <h3 className="text-uppercase mt-5">{detailData.nama}</h3>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p>Diunggah oleh <span className="fst-italic">{detailData.author.user_fullName}</span></p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">

                            <p className="text-end text-muted">{detailData.createdAt}</p>
                        </div>
                        <Gap height={5} />

                        {isLoginHandler ? isLogin : undefined}

                        {/* <div className="card-action">
                            <ul className="action-menu">
                                <li className="edit-card">
                                    <a href={`/edit/${props.match.params.id}`} className="edit">Edit</a>
                                </li>
                                <li> | </li>
                                <li className="delete-card">
                                    <a onClick={isClickedHandler ? handleClick : undefined} className="delete">Hapus</a>
                                </li>
                            </ul>
                        </div> */}

                        <Gap height={20} />
                    </div>

                    <div className="mt-3 mb-5 shadow">
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
                        <TabContent activeTab={currentActiveTab}>
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