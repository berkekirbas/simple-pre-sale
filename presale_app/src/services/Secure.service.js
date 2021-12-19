import axios from "axios";

class SecureService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getCSRFToken = async () => {
    const response = await axios.get(
      `${this.baseUrl}/api/v1/secure/getCSRFToken`
    );

    axios.defaults.headers.post["X-CSRF-Token"] = response.data.CSRFToken;
  };

  checkAuthentication = async () => {
    const response = await axios
      .get(`${this.baseUrl}/api/v1/secure/authenticationChecker`)
      .then((response) => response)
      .catch((error) => error);
    return response.data.data;
  };
}

export default new SecureService(process.env.REACT_APP_BASE_API_URL);
