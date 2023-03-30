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
    const res = await axios({
      method,
      url,
      data,
      headers,
    });
    return res;
  } catch (error) {
    console.log(error);
    Swal.fire("Error", `${error}`, "error");
  }
};

export default fetchData;
