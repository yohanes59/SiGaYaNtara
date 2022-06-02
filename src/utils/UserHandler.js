import axios from "axios";
import swal from "sweetalert";

const userRegister = (user) => {
    const { fullName, email, password } = user;
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);

    axios.post('https://sigayantara-api.herokuapp.com/v1/auth/register', formData)
        .then((response) => {
            if (response.status === 201) {
                swal({
                    title: "Selamat!",
                    text: `${response.data.message}`,
                    icon: "success",
                    button: "Ok",
                })
                    .then((result) => {
                        window.location.href = `/login`;
                    });
            }
        })
        .catch((error) => {
            swal({
                title: "Gagal!",
                text: `${error.response.data.message}`,
                icon: "error",
                button: "Ok",
            });
        });
}

export { userRegister };