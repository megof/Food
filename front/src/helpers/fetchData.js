import axios from "axios";
import Swal from "sweetalert2";

const fetchData = async (
  url,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "application/json",
    "x-access-token": `${localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODAwNjM3ODAsImV4cCI6MTY4MDE1MDE4MH0.fsZy_AFRhjoSkjgAbOlb153Ysm10vjal3vlgv9VAyzc"}`,
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

export default fetchData;
