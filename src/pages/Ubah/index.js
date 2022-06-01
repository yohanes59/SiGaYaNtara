import React from 'react'
import './ubah.css'

const Ubah = () => {
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
                <div>
                    <button className="btn-submit" type="submit">Simpan</button>
                </div>
            </form>
        </div>
    )
}

export default Ubah