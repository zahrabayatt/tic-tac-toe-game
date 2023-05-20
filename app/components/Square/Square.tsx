"use client";
import React from "react";
import "./Square.scss";

interface Props {
  value: string | null;
  onClick: () => void;
}

const Square = ({ value, onClick }: Props) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

export default Square;
