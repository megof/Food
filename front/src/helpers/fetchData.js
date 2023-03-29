import axios from "axios";
import Swal from "sweetalert2";

const fetchData = async (
  url,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "application/json",
    "x-access-token": `${localStorage.getItem("token") || ""}`,
  }
) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    // console.log(headers);
    console.log("petición correcta", response.data.message);
    if (response.data.message.includes("logged")) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1000,
      });
      return response;
    } else {
      return response;
    }
  } catch (err) {
    console.log("petición fallida" + err.response.data.message);
    if (err.response.data.message.includes("Username")) {
      Swal.fire("Error", `${err.response.data.message}`, "error");
    } else {
      Swal.fire("Error", `${err.message}`, "error");
    }
  }
};

export default fetchData;
