import axios from "axios";
import Swal from "sweetalert2";

const loginData = async (
  url,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "application/json",
    "x-access-token": `${localStorage.getItem("token") || ""}`,
  }
) => {
  try {
    const res = await axios({
      method,
      url,
      data,
      headers,
    });

    if (res.data.message.includes("logged")) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario verificado correctamente",
        showConfirmButton: false,
        timer: 500,
      });
      return res;
    }
  } catch (err) {
    if (err.response.data.message.includes("Username")) {
      Swal.fire("Usuario o password...", `Nombre usuario o Contraseña incorrecto`, "error");
    }
  }
};

export default loginData;
