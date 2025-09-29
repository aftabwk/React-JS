import React from "react";
import { Card } from "../assets/index";
// We can send props by passing an object.
// As you can see, we are calling Card and sending the object named 'value'.
// The 'key' helps to identify cards separately.
const CardListing = () => {
  const card = [
    {
      name: "Aftab",
    },
    {
      name: "Rohan",
    },
    {
      name: "Rehan",
    },
  ];
  return (
    <div className="grid grid-cols-6 grid-rows-3 h-screen w-full bg-amber-100 gap-3 p-3">
      {card.map((val, index) => {
        return <Card object={val} key={index} />;
      })}
    </div>
  );
};

export default CardListing;
