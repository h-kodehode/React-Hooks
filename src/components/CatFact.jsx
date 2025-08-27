import { useEffect, useState } from "react";

const apiUrl = "https://catfact.ninja/facts?limit=30";

export default function CatFacts() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  console.log(data);
  useEffect(() => {
    async function fetchCatFact() {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`something went wrong... ${response.status}`);
        }
        const jsonData = await response.json();
        console.log(jsonData);

        const randomIndex = Math.floor(Math.random() * jsonData.data.length);
        // console.log(randomIndex);

        // Legger randomFact i et tomt ARRAY før jeg oppdatrer data i useState
        const catFacts = [];

        const randomFact = jsonData.data[randomIndex].fact;
        console.log(randomFact);

        catFacts.push(randomFact);
        setData(catFacts);
      } catch (err) {
        console.error(err);

        setError(err.message);
      }
    }

    fetchCatFact();
  }, []);

  return (
    <>
      <div>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <p>{data === null ? "Loading... ⌛" : data}</p>
        )}

        <ul>
          {data.map((catFact, index) => (
            <li key={index}>{catFact.fact}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
