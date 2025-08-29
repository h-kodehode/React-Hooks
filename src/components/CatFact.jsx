import { useEffect, useState } from "react";

const apiUrl = "https://catfact.ninja/facts?limit=30";

export default function CatFacts() {
  const [error, setError] = useState(null);
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCatFact() {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`something went wrong... ${response.status}`);
        }
        const jsonData = await response.json();
        console.log(jsonData);

        const randomFacts = [];

        for (let i = 0; i < 5; i++) {
          const randomIndex = Math.floor(Math.random() * jsonData.data.length);
          //   console.log(randomIndex);
          randomFacts.push(jsonData.data[randomIndex].fact);
        }
        // console.log(randomFacts);

        setFacts(randomFacts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); //Ferdig med henting uansett utfall
      }
    }

    fetchCatFact();
  }, []);

  return (
    <>
      <div className=" flex flex-col justify-center items-center w-xl mb-40">
        {loading && <p>Loading... ⌛</p>}
        {error && <p className="text-red-600">{error}</p>}( )
        <ul className="w-3xl text-amber-50 list-disc mb-10">
          {facts.map((fact, index) => (
            <li key={index} className="text-lg mb-2">
              {fact}
            </li>
          ))}
        </ul>
        <img
          src="citty.jpg"
          alt="picture of cats"
          className="filter sepia saturate-200 hue-rotate-90 brightness-80 rounded"
        />
      </div>
    </>
  );
}
