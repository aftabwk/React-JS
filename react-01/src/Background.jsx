import React, { useState } from "react";

const Background = () => {
  const [color, setColor] = useState("olive");
  const colors = [
    {
      name: "Red",
      shade: "red",
      text: "white",
    },
    {
      name: "Green",
      shade: "green",
      text: "white",
    },
    {
      name: "Blue",
      shade: "blue",
      text: "white",
    },
    {
      name: "Olive",
      shade: "olive",
      text: "white",
    },
    {
      name: "Grey",
      shade: "grey",
      text: "white",
    },
    {
      name: "Yellow",
      shade: "yellow",
      text: "black",
    },
    {
      name: "Pink",
      shade: "pink",
      text: "black",
    },
    {
      name: "Purple",
      shade: "purple",
      text: "white",
    },
    {
      name: "Lavender",
      shade: "lavender",
      text: "black",
    },
    {
      name: "white",
      shade: "white",
      text: "black",
    },
    {
      name: "Black",
      shade: "black",
      text: "white",
    },
  ];
  return (
    <div
      style={{ background: color }}
      className="h-screen w-full duration-100 "
    >
      <div className="h-16 fixed inset-x-0 flex-wrap justify-center flex gap-3 p-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((value, index) => {
            return (
              <button
                onClick={() => setColor(value.shade)}
                key={index}
                style={{ backgroundColor: value.shade, color: value.text }}
                className="px-4 py-1 rounded-full shadow-lg cursor-pointer"
              >
                {value.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Background;
