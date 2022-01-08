import axios from "axios";

class AdminService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  checkIsAdmin = async () => {
    const response = await axios
      .get(`${this.baseUrl}/api/v1/admin/checkIsAdmin`, {
        withCredentials: true,
      })
      .then((response) => response)
      .catch((error) => error);
    return response.data.data;
  };

  getAllUsers = async () => {
    const response = await axios
      .get(`${this.baseUrl}/api/v1/admin/getAllUsers`, {
        withCredentials: true,
      })
      .then((response) => response)
      .catch((error) => error);
    console.log(response.data);
    return response.data;
  };
}

export default new AdminService("http://localhost:3005");
