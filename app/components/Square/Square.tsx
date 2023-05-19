"use client";
import React from "react";
import "./Square.css";

interface Props {
  value: string;
  OnClick: () => void;
}

const Square = ({ value, OnClick }: Props) => {
  return (
    <button onClick={OnClick} className="square">
      {value}
    </button>
  );
};

export default Square;
