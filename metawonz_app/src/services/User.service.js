import axios from "axios";
import SecureService from "./Secure.service";

class UserService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getUser = async () => {
    const data = await SecureService.getCSRFToken();

    const response = await axios
      .get(`${this.baseUrl}/api/v1/private/user/getUser`, {
        withCredentials: true,
        headers: {
          "X-CSRF-Token": data,
        },
      })
      .then((response) => response);
    return response.data;
  };

  setWithdrawalAddress = async (values) => {
    const data = await SecureService.getCSRFToken();

    const response = await axios
      .put(`${this.baseUrl}/api/v1/private/user/setWithdrawAddress`, values, {
        withCredentials: true,
        headers: {
          "X-CSRF-Token": data,
        },
      })
      .then((response) => response);
    return response.data;
  };

  addPurchasedMetawonz = async (values) => {
    const data = await SecureService.getCSRFToken();

    const response = await axios
      .put(`${this.baseUrl}/api/v1/private/user/addPurchasedMetawonz`, values, {
        withCredentials: true,
        headers: {
          "X-CSRF-TOKEN": data,
        },
      })
      .then((response) => response);
    return response.data;
  };
}

export default new UserService("http://localhost:3005");
