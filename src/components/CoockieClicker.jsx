import { useState } from "react";

export default function CoockieClicker() {
  const [count, setCount] = useState(0);

  //   setCount((prev) => prev + 1);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        <img className="w-sm rounded-full" src="./public/cupcake.jpg" alt="" />
        <p className="text-4xl">Yum! You have {count} delicious cupcakes 😍</p>
      </button>
    </>
  );
}
