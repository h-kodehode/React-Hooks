import { useEffect, useState } from "react";

const apiUrl = "https://catfact.ninja/facts?limit=5";

export default function CatFacts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchCatFact() {
      const response = await fetch(apiUrl);

      const jsonData = await response.json();
      console.log(jsonData.data[0].fact);

      setData(jsonData.data[0].fact);
    }
    fetchCatFact();
  }, []);

  return (
    <>
      <p>{data === null ? "Loading.." : data}</p>
    </>
  );
}
