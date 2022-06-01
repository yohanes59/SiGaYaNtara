import React from 'react'
import { Form, FormGroup, Label, Input, Col, Row, FormText} from 'reactstrap';
import { Gap } from "../../components";

const Unggah = () => {
  return (
    <>
        <div className="container">
            <div className="heading-title text-center">
                <h2 className="text-uppercase">Unggah</h2>
            </div>

            <Form>
                <FormGroup>
                    <Label for="name" sm={2}>
                        Nama
                    </Label>
                        <Input 
                            id="cagarName"
                            name="nama"
                            type="text"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="category">
                        Kategori
                    </Label>
                    <Input
                        id="category"
                        name="kategori"
                        type="select"
                    >
                        <option>Benda</option>
                        <option>Bangunan</option>
                        <option>Struktur</option>
                        <option>Situs</option>
                        <option>Kawasan</option>
                        </Input>
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="province">
                                Provinsi
                            </Label>
                            <Input
                                id="province"
                                name="province"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="cityOrDistrict">
                                Kota/Kabupaten
                            </Label>
                            <Input
                                id="cityDisctrict"
                                name="cityOrDistrict"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="description">
                        Deskripsi
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Deskripsi singkat cagar budaya..."
                        type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="uploadImages">
                       Upload Gambar
                    </Label>
                    <Input
                        id="uploadImages"
                        name="uploadImages"
                        type="file"
                    />
                    <FormText>
                        Unggah gambar maksimal 1 gambar.
                    </FormText>
                </FormGroup>
            </Form>
            <div>
                <button className="btn-submit" type="submit">Unggah</button>
            </div>
        </div>

        <Gap height={50}/>
    </>
  )
}

export default Unggah