import { useState, useEffect } from "react";

const UseFetch = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const resGifs = [];
        const { data = [] } = res;
        if (Array.isArray(data)) {
          data.map((obj) => {
            resGifs.push({ id: obj.id, url: obj.images.original.url });
          });
          setData(resGifs);
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data };
};

export default UseFetch;
