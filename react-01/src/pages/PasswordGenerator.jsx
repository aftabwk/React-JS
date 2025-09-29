import React, { useState, useCallback, useEffect, useRef } from "react";
// useCallback = lets you cache a function definition between re-renders.
// A function is stored in memory, and when we run it, it runs the selected part instead of the full part.
// Format: we can create a function inside useCallback and bind it with dependencies.
// If dependencies change, it will also affect the function.
// Example: it is helpful in product filters.
// It does not run the function; it only stores the updated function in memory.
// The running part is handled by useEffect.

// useEffect = helps to run a function when dependencies change or when the page is loaded.

// useRef = helps to take a reference of anything.

//useEffect
const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("blue");
  const [text, setText] = useState("Copy");
  const [copy, setCopy] = useState(false);

  //useRef hookmd
  const passRef = useRef(null);

  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters, password]);
  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password).then(() => {
      setCopy(true);
    });
  }, [password]);

  //useEffect hook
  useEffect(() => {
    if (copy) {
      setColor("gray");
      setText("Copied");
    } else {
      setColor("blue");
      setText("Copy");
    }
  }, [copy]);
  useEffect(() => {
    setCopy(false);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters]);
  return (
    <>
      <div className="bg-black h-screen flex justify-center py-4">
        <div className="bg-gray-700 text-orange-500 h-52 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 flex justify-center flex-col gap-3 py-3">
          <p className="text-white text-3xl w-full text-center">
            Password Generator
          </p>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              value={password}
              type="text"
              className="outline-none w-full py-1 px-3 bg-white text-2xl placeholder:text-gray-400"
              placeholder="Password"
              ref={passRef}
              readOnly
            />
            <button
              onClick={copyPassword}
              style={{ background: color }}
              className=" text-white outline-none px-3 py-0.5 shrink-0"
            >
              {text}
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-white">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numbers}
                id="number"
                className="cursor-pointer"
                onChange={() => {
                  setNumbers((prev) => !prev);
                }}
              />
              <label htmlFor="number" className="cursor-pointer text-white">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={characters}
                id="characters"
                className="cursor-pointer"
                onChange={() => {
                  setCharacters((prev) => !prev);
                }}
              />
              <label htmlFor="characters" className="cursor-pointer text-white">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
