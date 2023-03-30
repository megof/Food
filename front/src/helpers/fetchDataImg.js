import axios from "axios";
import Swal from "sweetalert2";

const fetchDataImg = async (
  url,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "multipart/form-data",
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
    console.log("petición correcta");
    return response;
  } catch (error) {
    Swal.fire("Error", `${error}`, "error");
  }
};

export default fetchDataImg;
