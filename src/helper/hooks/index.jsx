import { useEffect, useState } from "react";

const useFetch = (parameter) => {
  const { url, config = {}, defaultData, dependencyArray = [] } = parameter;
  const [resultData, setResultData] = useState(defaultData);

  function fetchPokemon() {
    fetch(url, config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResultData(data.results);
      })
      .catch((error) => {
        console.log(`ini error pas fetching`);
      });
  }

  useEffect(() => {
    fetchPokemon();
  }, [url, ...dependencyArray]);

  return resultData;
};

const useFetchDetail = (parameter) => {
  const { url, config = {}, defaultData, dependencyArray = [] } = parameter;
  const [dataDetail, setDataDetail] = useState(defaultData);

  function fetchDataDetails() {
    fetch(url, config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataDetail(data);
      })
      .catch((error) => {
        console.log(`ini error di fetchDetail`);
      });
  }

  useEffect(() => {
    fetchDataDetails();
  }, [url, ...dependencyArray]);

  return dataDetail;
};

export { useFetch, useFetchDetail };
