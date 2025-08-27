import { useState } from "react";

export default function CoockieClicker() {
  const [count, setCount] = useState(0);

  //   setCount((prev) => prev + 1);

  return (
    <>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="flex flex-col items-center focus:outline-none"
        >
          <img
            className="w-40 mb-3 rounded-full shadow-lg"
            src="/cupcake.jpg"
            alt="Cupcake"
          />
          <p className="text-3xl text-amber-50">
            Yum! You have {count} delicious cupcakes 😍
          </p>
        </button>
      </div>
    </>
  );
}
