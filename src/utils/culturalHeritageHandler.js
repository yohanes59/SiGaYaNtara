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

const createCulturalHeritage = (cultureHeritage) => {
    _checkInput(cultureHeritage);
    const { nama, image, jenis, provinsi, kabupaten, sejarah, description, user_id, user_fullName } = cultureHeritage;
    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('image', image);
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
                        window.location.href = `/profile`;
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


export { createCulturalHeritage };