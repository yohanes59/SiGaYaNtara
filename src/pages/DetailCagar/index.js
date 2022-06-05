import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { HomepageImage } from '../../assets'
import './detailCagar.css'

const DetailCagar = (props) => {
    
    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    const toggleTab = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    if (!props.user) {
        return window.location.href = '/';
    }

    return (
        <div className="container">
            <div className="cat-img">
                {/* gambar hanya sebagai data dummy */}
                <img className="cagar-img" src={ HomepageImage } alt="img" />
                <p className="shadow-cat-card border-top-0"></p>
                <p className="category-card text-center text-uppercase fw-bold pt-2">Kategori</p>
            </div>

            <h3 className="text-uppercase mt-5">Nama Cagar Budaya</h3>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p>Diunggah oleh <span className="fst-italic">Nama Penulis</span></p>
                </div>
                
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p className="text-end text-muted">dd/mm/yyyy</p>
                </div>
            </div>

            <div className="mt-3 mb-5 shadow">
                <Nav tabs>
                    <NavItem>
                        <NavLink className={currentActiveTab === '1' ? "tabs-active-tabs": "tabs"} onClick={() => { toggleTab('1'); }}>
                            Keberadaan
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={currentActiveTab === '2' ? "tabs-active-tabs": "tabs"} onClick={() => { toggleTab('2'); }}>
                            Sejarah
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={currentActiveTab === '3' ? "tabs-active-tabs": "tabs"} onClick={() => { toggleTab('3'); }}>
                            Deskripsi
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={currentActiveTab}>
                    <TabPane tabId="1">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="px-1 pt-2">Provinsi: <span>Jawa Tengah</span></p>
                                <p className="px-1">Kabupaten/ Kota: <span>Yogyakarta</span></p>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="px-1 pt-2 text-break">Mengutip jurnal Pesona Candi Borobudur Sebagai Wisata Budaya Di Jawa Tengah karya Reza Ayu Dewanti, 
                                    candi Borobudur merupakan peninggalan dinasti Syailendra. Candi ini didirikan oleh penganut agama Buddha Mahayana. 
                                    Bangunan ini dibentuk sekitar abad ke-8 pada masa pemerintahan wangsa Syailendra. 
                                    Candi Borobudur termasuk kuil Buddha terbesar di dunia. Tujuan dibangun Candi Borobudur untuk 
                                    memuliakan raja-raja Syailendra (775-850 M) yang telah bersatu kembali dengan dewa yang menjadi asal beliau.</p>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="px-1 pt-2 text-break">Mengutip dari jurnal Pengaruh Taman Wisata Candi Borobudur Terhadap 
                                    Kondisi Kehidupan Sosial Ekonomi Masyarakat Kabupaten Magelang 1980-1997 
                                    bangunan candi dibangun pada abad ke-8 Masehi. Candi ini mulai diresmikan 
                                    menjadi tempat wisata pada 15 Juli 1980. Kemudian, candi Borobudur ditetapkan 
                                    sebagai Pusaka Budaya Dunia oleh UNESCO pada 1991.</p>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default DetailCagar
