import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9c7b39113933420fb3734e7e6871b340",
  },
});
