import axios from "axios";
import Swal from "sweetalert2";

const fetchData = async (url, method = "get", data = {}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    console.log("petición correcta")
    return response;
  } catch (error) {
    Swal.fire("Error", `${error}`, "error");
  }
};

export default fetchData;
