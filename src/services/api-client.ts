import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8bcf34fd35344e2181adb252fbd3b44a",
  },
});
