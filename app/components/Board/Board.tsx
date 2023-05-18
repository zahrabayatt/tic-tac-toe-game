"use client";
import React, { useState } from "react";
import "./Board.css";
import Square from "../Square/Square";

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleSquareClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} OnClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} OnClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} OnClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} OnClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} OnClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} OnClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} OnClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} OnClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} OnClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
};

export default Board;
