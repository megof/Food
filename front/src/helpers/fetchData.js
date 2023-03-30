import axios from "axios";
import Swal from "sweetalert2";

const fetchData = async (
  url,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "application/json",
    "x-access-token": `${localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODAxMjEzMzMsImV4cCI6MTY4MDIwNzczM30.dq-ILCDe690Rc2zoFiPNQFFxh8BsKG7Jy5NPCmcH0Jg"}`,
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
