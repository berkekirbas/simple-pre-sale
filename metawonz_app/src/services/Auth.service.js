import axios from "axios";
import SecureService from "./Secure.service";

class AuthService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  signup = async (formValues) => {
    const data = await SecureService.getCSRFToken();
    const response = await axios
      .post(`${this.baseUrl}/api/v1/auth/signup`, formValues, {
        withCredentials: true,
        headers: {
          "X-CSRF-Token": data,
        },
      })
      .then((response) => response);
    return response.data;
  };

  signin = async (formValues) => {
    const data = await SecureService.getCSRFToken();
    const response = await axios
      .post(`${this.baseUrl}/api/v1/auth/signin`, formValues, {
        withCredentials: true,
        headers: {
          "X-CSRF-Token": data,
        },
      })
      .then((response) => response);
    return response.data;
  };
}

export default new AuthService("http://localhost:3005");
