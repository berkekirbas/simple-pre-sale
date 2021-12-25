import { useEffect, useState } from "react";
import SecureService from "../services/Secure.service";

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function checkAuth() {
      try {
        const data = await SecureService.checkAuthentication();
        setError(null);
        setAuthenticated(data);
        setIsLoading(false);
      } catch (err) {
        setAuthenticated(null);
        setError(err);
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { isAuthenticated, error, isLoading };
};

export default useAuth;
