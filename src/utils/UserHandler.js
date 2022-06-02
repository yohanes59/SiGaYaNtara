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

const userLogin = (user) => {
  const { email, password } = user;
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  axios.post('https://sigayantara-api.herokuapp.com/v1/auth/login', formData, {
    withCredentials: true,
  })
    .then((response) => {
      console.log(response);
      return window.location.href = '/profile';
    })
    .catch((error) => {
      swal({
        title: "Gagal Login!",
        text: "Username atau Password Anda Salah.",
        icon: "error",
        button: "Ok",
      });
    });
}

const userLogout = () => {
  swal({
    title: "Keluar?",
    text: "Apakah Anda ingin keluar?",
    icon: "warning",
    buttons: ["Batal", "Ok"],
    dangerMode: true,
  })
    .then((willLogout) => {
      if (willLogout) {
        axios.post('https://sigayantara-api.herokuapp.com/v1/auth/logout', '', {
          withCredentials: true,
        })
          .then((res) => {
            swal("Berhasil keluar!", {
              icon: "success",
            }).then((res) => window.location.href = '/login');
          })
          .catch((err) => {
            swal("Gagal Logout!");
          });
      }
    });
}

export { userRegister, userLogin, userLogout };