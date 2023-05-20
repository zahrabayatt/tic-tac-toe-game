"use client";
import React, { useState } from "react";
import "./Board.scss";
import Square from "../Square/Square";

interface Props {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquare: string[]) => void;
}

const Board = ({ xIsNext, squares, onPlay }: Props) => {
  const handleSquareClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
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
      {[0, 3, 6].map((row) => (
        <div className="board-row" key={row}>
          {[row, row + 1, row + 2].map((col) => (
            <Square
              value={squares[col]}
              onClick={() => handleSquareClick(col)}
              key={col}
            />
          ))}
        </div>
      ))}
    </>
  );
};

const calculateWinner = (squares: string[]) => {
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
};

export default Board;
