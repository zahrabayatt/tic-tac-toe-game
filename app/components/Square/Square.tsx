"use client";
import React from "react";
import "./Square.scss";

interface Props {
  value: string | null;
  onClick: () => void;
  isHighlighted?: boolean;
}

const Square = ({ value, onClick, isHighlighted = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`square ${isHighlighted ? "highlight" : ""}`}
    >
      {value}
    </button>
  );
};

export default Square;
