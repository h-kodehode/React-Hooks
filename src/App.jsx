import CatFacts from "./components/CatFact";
import CoockieClicker from "./components/CoockieClicker";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <section className="mb-20 bg-teal-200">
        <CoockieClicker />
      </section>
      <ul>
        <li className="mb-5">
          <CatFacts />
        </li>
        <li className="mb-5">
          <CatFacts />
        </li>
        <li className="mb-5">
          <CatFacts />
        </li>
        <li className="mb-5">
          <CatFacts />
        </li>
        <li className="mb-5">
          <CatFacts />
        </li>
      </ul>
    </div>
  );
}

export default App;
