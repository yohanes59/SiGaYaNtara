import React from 'react'
import { Gap } from '../../components'
import './ubah.css'

const Ubah = (props) => {
    if (!props.user) {
        return window.location.href = '/';
    }
    return (
        <div className="container">
            <h2>EDIT</h2>
            <form>
                <div className="form-group">
                    <label for="inpuNama">Nama</label>
                    <input type="text" className="form-control" id="inputNama" />
                </div>
                <div className="form-group">
                    <label for="inputKategori">Kategori</label>
                    <select className="form-control" id="inputKategori">
                        <option>Benda</option>
                        <option>Bangunan</option>
                        <option>Struktur</option>
                        <option>Situs</option>
                        <option>Kawasan</option>
                    </select>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label for="inputProvinsi">Provinsi</label>
                        <input type="text" className="form-control" id="inputProvinsi" />
                    </div>
                    <div className="form-group">
                        <label for="inputKabupaten">Kabupaten</label>
                        <input type="text" className="form-control" id="inputKabupaten" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputDeskripsi">Deskripsi</label>
                    <textarea className="form-control" id="inputDeskripsi" rows="3" placeholder="Deskripsi singkat cagar budaya..."></textarea>
                </div>
                <Gap height={20}/>
                <div>
                    <button className="btn-submit" type="submit">Simpan</button>
                </div>
            </form>
            <Gap height={60}/>
        </div>
    )
}

export default Ubah