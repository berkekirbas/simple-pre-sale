import axios from "axios";

class UserService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getUser = async () => {
    const response = await axios
      .get(`${this.baseUrl}/api/v1/private/user/getUser`, {
        withCredentials: true,
      })
      .then((response) => response);
    return response.data;
  };

  setWithdrawalAddress = async (values) => {
    const response = await axios
      .put(`${this.baseUrl}/api/v1/private/user/setWithdrawAddress`, values, {
        withCredentials: true,
      })
      .then((response) => response);
    return response.data;
  };
}

export default new UserService("http://localhost:3005");
