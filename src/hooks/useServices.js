import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/service.json")
      .then((res) => setServices(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { services, loading, error };
};

export default useServices;
