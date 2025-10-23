import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setServiceLoading(true);
    axios
      .get("/service.json")
      .then((res) => setServices(res.data))
      .catch((err) => setError(err))
      .finally(() => setServiceLoading(false));
  }, []);
  return { services, serviceLoading, error };
};

export default useServices;
