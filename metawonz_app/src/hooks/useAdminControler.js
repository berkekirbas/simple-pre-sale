import { useEffect, useState } from "react";
import AdminService from "../services/Admin.service";

const useAdminController = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function checkIsAdmin() {
      try {
        const data = await AdminService.checkIsAdmin();
        setError(null);
        setIsAdmin(data);
        setIsLoading(false);
      } catch (err) {
        setIsAdmin(null);
        setError(err);
        setIsLoading(false);
      }
    }

    checkIsAdmin();
  }, []);

  return { isAdmin, error, isLoading };
};

export default useAdminController;
