import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { Loading } from '../../components'
import { getDetailCultureHeritage, updateCulturalHeritage } from '../../utils/culturalHeritageHandler';
import './edit.css'

const Edit = (props) => {
    const [nama, setNama] = useState('');
    const [image, setImage] = useState();
    const [cloudinary_id, setCloudinary_id] = useState();
    const [jenis, setJenis] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [kabupaten, setKabupaten] = useState('');
    const [sejarah, setSejarah] = useState('');
    const [description, setDescription] = useState('');
    let [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const id = props.match.params.id;
        if (id) {
            getDetailCultureHeritage(id)
                .then(result => {
                    setNama(result.nama);
                    setImage(result.image)
                    setCloudinary_id(result.cloudinary_id);
                    setJenis(result.jenis);
                    setProvinsi(result.provinsi);
                    setKabupaten(result.kabupaten);
                    setSejarah(result.sejarah);
                    setDescription(result.description);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [props.match.params.id])

    const onSubmit = (ev) => {
        const cultureHeritage = {
            nama,
            image,
            cloudinary_id,
            jenis,
            provinsi,
            kabupaten,
            sejarah,
            description,
            user_id: props.user,
            user_fullName: props.user,
        }
        setLoading(true);
        const id = props.match.params.id;
        updateCulturalHeritage(cultureHeritage, id);
    }

    if (loading === true) {
        return (
            <Loading />
        )
    }
    return (
        <article className="container edit-content mb-5" id="content">
            <h2 className="edit-title text-center mb-3 px-3" tabIndex="0">Edit Data Cagar Budaya</h2>

            <Form className="px-3">
                <FormGroup>
                    <Label for="name" tabIndex="0">Nama Cagar Budaya</Label>
                    <Input id="cagarName" name="nama" type="text" value={nama} onChange={(ev) => setNama(ev.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label for="jenis" tabIndex="0">Jenis</Label>
                    <Input id="jenis" name="Jenis" type="select" onChange={(ev) => setJenis(ev.target.value)} required>
                        <option disabled selected>Pilih jenis cagar budaya!</option>
                        <option value="Benda" selected={jenis === "Benda" ? true : false}>Benda</option>
                        <option value="Bangunan" selected={jenis === "Bangunan" ? true : false}>Bangunan</option>
                        <option value="Struktur" selected={jenis === "Struktur" ? true : false}>Struktur</option>
                        <option value="Situs" selected={jenis === "Situs" ? true : false}>Situs</option>
                        <option value="Kawasan" selected={jenis === "Kawasan" ? true : false}>Kawasan</option>
                    </Input>
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="province" tabIndex="0">Provinsi</Label>
                            <Input id="province" name="province" type="text" value={provinsi} onChange={(ev) => setProvinsi(ev.target.value)} required />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="cityOrDistrict" tabIndex="0">Kota/Kabupaten</Label>
                            <Input id="cityDisctrict" name="cityOrDistrict" type="text" value={kabupaten} onChange={(ev) => setKabupaten(ev.target.value)} required />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="sejarah" tabIndex="0">Sejarah</Label>
                    <Input id="sejarah" name="sejarah" placeholder="Sejarah singkat cagar budaya..." type="textarea" rows="7" value={sejarah} onChange={(ev) => setSejarah(ev.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="description" tabIndex="0">Deskripsi</Label>
                    <Input id="description" name="description" placeholder="Deskripsi singkat cagar budaya..." type="textarea" rows="7" value={description} onChange={(ev) => setDescription(ev.target.value)} required />
                </FormGroup>

                <button className="btn-submit mt-3 fs-7 border-0 text-white rounded-pill shadow cursor-pointer" type="submit" onClick={onSubmit}>Simpan</button>
            </Form>
        </article>
    )
}

export default withRouter(Edit);