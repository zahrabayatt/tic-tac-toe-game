"use client";
import React from "react";

interface Props {
  value: boolean;
  onToggle: () => void;
}

const Toggle = ({ value, onToggle }: Props) => {
  const toggleClass = " transform translate-x-6";

  return (
    <div
      onClick={onToggle}
      className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
        value ? "bg-blue-200" : "bg-gray-300"
      } rounded-full p-1 cursor-pointer`}
    >
      <div
        className={`${
          value ? "bg-blue-600" : "bg-white"
        } md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transition ${
          value ? toggleClass : "null"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
