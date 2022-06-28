import axios from "axios";
import swal from "sweetalert";

const _checkInput = (cultureHeritage) => {
    const { nama, image, jenis, provinsi, kabupaten, sejarah, description } = cultureHeritage;
    if (!nama || !image || !jenis || !provinsi || !kabupaten || !sejarah || !description) {
        return swal({
            title: "Gagal!",
            text: "Mohon lengkapi semua data.",
            icon: "error",
            button: "Ok",
        });
    }
}

const _checkUbah = (cultureHeritage) => {
    const { nama, jenis, provinsi, kabupaten, sejarah, description } = cultureHeritage;
    if (!nama || !jenis || !provinsi || !kabupaten || !sejarah || !description) {
        return swal({
            title: "Gagal!",
            text: "Mohon lengkapi semua data.",
            icon: "error",
            button: "Ok",
        });
    }
}

const createCulturalHeritage = (cultureHeritage) => {
    _checkInput(cultureHeritage);
    const { nama, image, cloudinary_id, jenis, provinsi, kabupaten, sejarah, description, user_id, user_fullName } = cultureHeritage;
    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('image', image);
    formData.append('cloudinary_id', cloudinary_id);
    formData.append('jenis', jenis);
    formData.append('provinsi', provinsi);
    formData.append('kabupaten', kabupaten);
    formData.append('sejarah', sejarah);
    formData.append('description', description);
    formData.append('user_id', user_id);
    formData.append('user_fullName', user_fullName);

    axios.post(`https://sigayantara-api.herokuapp.com/v1/cultural-heritage`, formData, {
        // axios.post(`http://localhost:5000/v1/cultural-heritage`, formData, {
        withCredentials: true,
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
        .then(res => {
            if (res.status === 201) {
                swal({
                    title: "Selamat!",
                    text: `${res.data.message}`,
                    icon: "success",
                    button: "Ok",
                })
                    .then((result) => {
                        window.location.href = `/cagar`;
                    });
            }
        })
        .catch(err => {
            swal({
                title: "Gagal!",
                text: `${err.response.data}`,
                icon: "error",
                button: "Ok",
            });
        })
}

const getAllCultureHeritage = async (counter) => {
    const response = await axios.get(`https://sigayantara-api.herokuapp.com/v1/cultural-heritage?page=${counter}&perPage=9`, {
        // const response = await axios.get(`http://localhost:5000/v1/cultural-heritage?page=${counter}&perPage=9`, {
        withCredentials: true,
    })
    return response.data;
}

const getDetailCultureHeritage = async (id) => {
    const response = await axios.get(`https://sigayantara-api.herokuapp.com/v1/cultural-heritage/${id}`, {
        // const response = await axios.get(`http://localhost:5000/v1/cultural-heritage/${id}`, {
        withCredentials: true,
    });
    return response.data.data;
}

const updateCulturalHeritage = (cultureHeritage, id) => {
    const { nama, jenis, provinsi, kabupaten, sejarah, description } = cultureHeritage;
    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('jenis', jenis);
    formData.append('provinsi', provinsi);
    formData.append('kabupaten', kabupaten);
    formData.append('sejarah', sejarah);
    formData.append('description', description);
    // if (image) {
    //     formData.append('image', image);
    // }

    _checkUbah(cultureHeritage);

    axios.patch(`https://sigayantara-api.herokuapp.com/v1/cultural-heritage/${id}`, formData, {
        withCredentials: true,
        headers: {
            'content-type': 'multipart/form-data',
        },
    })
        .then(res => {
            if (res.status === 200) {
                swal({
                    title: "Berhasil!",
                    text: `${res.data.message}`,
                    icon: "success",
                    button: "Ok",
                })
                    .then(result => {
                        window.location.href = `/cagar`;
                    })
            }
        })
        .catch(error => {
            swal({
                title: "Gagal!",
                text: "Semua kolom wajib diisi.",
                icon: "error",
                button: "Ok",
            });
        })
};

const deleteCulturalHeritage = (id) => {
    axios.delete(`https://sigayantara-api.herokuapp.com/v1/cultural-heritage/${id}`, {
        // axios.delete(`http://localhost:5000/v1/cultural-heritage/${id}`, {
        withCredentials: true,
        headers: {
            'content-type': 'multipart/form-data',
        },
    })
        .then(res => {
            if (res.status === 200) {
                swal({
                    title: "Selamat!",
                    text: `Data cagar budaya berhasil dihapus`,
                    icon: "success",
                })
                    .then((res) => {
                        window.location.href = `/cagar`;
                    });
            }
        })
        .catch(err => {
            swal({
                title: "Gagal!",
                text: `${err.response.data}`,
                icon: "error",
                button: "Ok",
            });
        })
}

export {
    createCulturalHeritage,
    getAllCultureHeritage,
    updateCulturalHeritage,
    deleteCulturalHeritage,
    getDetailCultureHeritage,
};