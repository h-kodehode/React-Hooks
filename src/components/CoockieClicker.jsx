import { useState } from "react";

export default function CoockieClicker() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-6xl font-extrabold mb-14 text-center">
        CoockieClicker!
      </p>
      <div className=" flex flex-col justify-center items-center w-xl py-6 rounded-md border-sky-100 bg-orange-300">
        <h1 className="text-white text-4xl font-semibold mb-8">Click me!</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="flex flex-col items-center focus:outline-none"
        >
          <img
            className="w-50 mb-3 rounded-full shadow-lg hover:brightness-75 transition-all cursor-pointer "
            src="/cupcake.jpg"
            alt="Cupcake"
          />
        </button>
        <p className="text-2xl text-amber-50 font-bold">
          Yum! You have {count} delicious cupcakes! 😍
        </p>
      </div>
    </>
  );
}
