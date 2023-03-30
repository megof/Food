// import axios from "axios";

const isAuthGuard = async (to, from, next) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (token && user) {
    next();
  } else {
    next({ name: "home" });
  }
};

export default isAuthGuard;

// // refresh token
// const isAuthGuard = async (to, from, next) => {
//   const url = `https://food-api-market.onrender.com/api/v1/users/login`;
//   const userLocaStorage = JSON.parse(localStorage.getItem("user"));
//   if (userLocaStorage) {
//     try {
//       const { data } = await axios.post(url, userLocaStorage);
//       localStorage.setItem("token", data.data.token);
//       next();
//     } catch (err) {
//       console.log(err);
//       next({ name: "home" });
//     }
//   } else {
//     next({ name: "home" });
//   }
// };
