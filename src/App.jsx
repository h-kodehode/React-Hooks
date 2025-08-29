import CatFacts from "./components/CatFact";
import CoockieClicker from "./components/CoockieClicker";
import UserComponent from "./components/UserComponent";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

function App() {
  const catFactsRef = useRef(null);

  const scrollToCatFacts = () => {
    catFactsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-800 py-20 text-white min-h-screen ">
      <section className="mb-40">
        <CoockieClicker />
      </section>

      <button
        onClick={scrollToCatFacts}
        className="animate-bounce text-white mb-26 bg-grey-300 p-4 rounded transition-colors duration-300 cursor-pointer"
      >
        <FaArrowDown className="text-6xl text-white" />
      </button>

      <section
        ref={catFactsRef}
        className="flex flex-col justify-center items-center py-6"
      >
        <h2 className="mb-8 text-4xl font-medium text-amber-100">
          5 random fact about cats 🐈
        </h2>
        <CatFacts />
      </section>

      <UserComponent />
    </div>
  );
}

export default App;
