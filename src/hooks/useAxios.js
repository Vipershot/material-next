import { useState, useEffect } from "react";
import { requests } from "../utils/axiosCreate";
export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    requests
      .get(url)
      .then(({ data }) => {
        setLoading(true);
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getlimit = async (limit) => {
    try {
      const { data } = await requests.get(`${url}?limit=${limit}`);
      setData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getItem = async () => {
    try {
      const data = requests.get(url);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    data,
    loading,
    getItem,
    getlimit,
  };
};
