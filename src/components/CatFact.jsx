const apiUrl = "https://catfact.ninja/facts?limit=5";

export default async function CatFacts() {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  console.log(data);
  return (
    <>
      <p>{data}</p>
    </>
  );
}
