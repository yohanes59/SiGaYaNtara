import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Col, Row, FormText } from 'reactstrap';
import { Gap } from "../../components";
import { withRouter } from 'react-router-dom';
import { createCulturalHeritage } from '../../utils/culturalHeritageHandler';
import './unggah.css'

const Unggah = (props) => {
    const [nama, setNama] = useState('');
    const [image, setImage] = useState();
    const [img, setImg] = useState();
    const [jenis, setJenis] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [kabupaten, setKabupaten] = useState('');
    const [sejarah, setSejarah] = useState('');
    const [description, setDescription] = useState('');

    const onImageUpload = (ev) => {
        const file = ev.target.files[0];
        setImage(file);
        try {
            setImg(URL.createObjectURL(file));
        } catch (err) {
            console.log(err);
        }
    }

    const onSubmit = () => {
        const cultureHeritage = {
            nama,
            image,
            jenis,
            provinsi,
            kabupaten,
            sejarah,
            description,
            user_id: props.user._id,
            user_fullName: props.user.fullName,
        }
        createCulturalHeritage(cultureHeritage);
    }

    // jika belum login maka tidak bisa akses halaman ini
    // bug
    // if (!props.user) {
    //     return window.location.href = '/';
    // }

    return (
        <>
            <div className="container">
                <div className="heading-title text-center">
                    <h2 className="text-uppercase">Unggah Data Cagar Budaya</h2>
                </div>

                <Form>
                    <FormGroup>
                        <Label for="name" sm={2}>Nama Cagar Budaya</Label>
                        <Input id="cagarName" name="nama" type="text" value={nama} onChange={(ev) => setNama(ev.target.value)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="jenis">Jenis</Label>
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
                                <Label for="province">Provinsi</Label>
                                <Input id="province" name="province" type="text" value={provinsi} onChange={(ev) => setProvinsi(ev.target.value)} required />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="cityOrDistrict">Kota/Kabupaten</Label>
                                <Input id="cityDisctrict" name="cityOrDistrict" type="text" value={kabupaten} onChange={(ev) => setKabupaten(ev.target.value)} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="sejarah">Sejarah</Label>
                        <Input id="sejarah" name="sejarah" placeholder="Sejarah singkat cagar budaya..." type="textarea" value={sejarah} onChange={(ev) => setSejarah(ev.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Deskripsi</Label>
                        <Input id="description" name="description" placeholder="Deskripsi singkat cagar budaya..." type="textarea" value={description} onChange={(ev) => setDescription(ev.target.value)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="uploadImages">Upload Gambar</Label>
                        {img && <img className="preview d-block mb-3" src={img} alt="preview" />}
                        <Input id="uploadImages" name="uploadImages" type="file" onChange={(ev) => onImageUpload(ev)} />
                        <FormText>Unggah gambar maksimal 1 gambar.</FormText>
                    </FormGroup>
                </Form>
                <div>
                    <button className="btn-submit" type="submit" onClick={onSubmit}>Unggah</button>
                </div>
            </div>

            <Gap height={50} />
        </>
    )
}

export default withRouter(Unggah);