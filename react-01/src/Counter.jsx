import { useState } from "react";

// This is the concept of the React hook useState.
// If we use vanilla JS to update the UI, it won't work. React can manipulate the DOM but cannot update the UI automatically.
// To update the UI, we use hooks in React, like the useState hook.
// We can easily change any value using the useState hook and have it update in the UI instantly.
const Counter = () => {
  let [counter, setCounter] = useState(5);
  return (
    <div className="h-screen w-full flex flex-col gap-4 items-center justify-center">
      <div className="text-4xl">Counter</div>
      <div className="text-2xl">Counter Value: {counter}</div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (counter < 20) {
              setCounter(++counter);
            }
          }}
          className="bg-blue-500 text-white  px-4 py-2 rounded cursor-pointer"
        >
          Add Value
        </button>
        <button
          onClick={() => {
            if (counter > 0) {
              setCounter(--counter);
            }
          }}
          className="bg-black text-white  px-4 py-2 rounded cursor-pointer"
        >
          Remove Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
