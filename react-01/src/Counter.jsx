import { useState } from "react";

// this is the concept of React hook UseState.
// If we use vanilla js to update ui it won't work react can manipulate DOM but it can not update UI in react.
// To update ui we have hooks in React js. Like Use state Hook.
// We can easily change any values by useState hook and update it in ui instantly
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
