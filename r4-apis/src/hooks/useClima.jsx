import { useEffect, useState } from "react";

export const useClima = () => {
  const [dataClima, setDataClima] = useState([]);
  useEffect(() => {
    const APY_KEY = "6151a6639c168d8fb41c815b9b1003bb";
    const consultarApi = async () => {
      const res1 = fetch(
        `http://api.weatherstack.com/current?access_key=${APY_KEY}&query=Salta`
      );
      const res2 = fetch(
        `http://api.weatherstack.com/current?access_key=${APY_KEY}&query=Tucuman`
      );
      const res3 = fetch(
        `http://api.weatherstack.com/current?access_key=${APY_KEY}&query=Cordoba`
      );
      const res4 = fetch(
        `http://api.weatherstack.com/current?access_key=${APY_KEY}&query=San%20Luis`
      );
      const res5 = fetch(
        `http://api.weatherstack.com/current?access_key=${APY_KEY}&query=Barcelona`
      );
      let data = await Promise.all([res1, res2, res3, res4, res5]);
      data = await Promise.all([
        data[0].json(),
        data[1].json(),
        data[2].json(),
        data[3].json(),
        data[4].json(),
      ]);
      setDataClima(data);
      console.log(data);
    };
    consultarApi();
  }, []);

  return {
    dataClima,
  };
};
