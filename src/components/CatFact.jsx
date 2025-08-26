import { useState } from "react";

const apiUrl = "https://catfact.ninja/facts?limit=5";

export default function CatFacts() {
  const [data, setData] = useState(null);

  return (
    <>
      <p>{data === null ? "Loading.." : data}</p>
    </>
  );
}
