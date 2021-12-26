import axios from "axios";

class AuthService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  signup = async (formValues) => {
    const response = await axios
      .post(`${this.baseUrl}/api/v1/auth/signup`, formValues, {
        withCredentials: true,
      })
      .then((response) => response);
    return response.data;
  };

  signin = async (formValues) => {
    const response = await axios
      .post(`${this.baseUrl}/api/v1/auth/signin`, formValues, {
        withCredentials: true,
      })
      .then((response) => response);
    return response.data;
  };
}

export default new AuthService("http://localhost:3005");
