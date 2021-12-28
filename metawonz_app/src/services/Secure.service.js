import axios from "axios";

class SecureService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getCSRFToken = async () => {
    const response = await axios.get(
      `${this.baseUrl}/api/v1/secure/getCSRFToken`,
      { withCredentials: true }
    );

    //axios.defaults.headers.post["X-CSRF-Token"] = response.data.CSRFToken;
    //axios.defaults.headers.put["X-CSRF-Token"] = response.data.CSRFToken;
    return response.data.CSRFToken;
  };

  checkAuthentication = async () => {
    const response = await axios
      .get(`${this.baseUrl}/api/v1/secure/authenticationChecker`, {
        withCredentials: true,
      })
      .then((response) => response)
      .catch((error) => error);
    return response.data.data;
  };
}

export default new SecureService("http://localhost:3005");
