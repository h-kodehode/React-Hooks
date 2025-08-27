import CatFacts from "./components/CatFact";
import CoockieClicker from "./components/CoockieClicker";
import UserComponent from "./components/UserComponent";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <section className="mb-20 bg-teal-200">
        <CoockieClicker />
      </section>

      <h2 className="mb-8 text-4xl font-medium text-amber-100">
        5 random fact about cats 🐈
      </h2>

      <ol>
        <li className=" text-xl mb-4 text-amber-50">
          <CatFacts />
        </li>
        <li className="mb-4 text-amber-50">
          <CatFacts />
        </li>
        <li className="mb-4 text-amber-50">
          <CatFacts />
        </li>
        <li className="mb-4 text-amber-50">
          <CatFacts />
        </li>
        <li className="mb-4 text-amber-50">
          <CatFacts />
        </li>
      </ol>
      <UserComponent />
    </div>
  );
}

export default App;
