"use client";
import React, { useState } from "react";
import Board from "../Board/Board";
import "./Game.scss";
import Toggle from "../Toggle/Toggle";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [sortAscending, setSortAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const handleToggleSortOrder = () => {
    setSortAscending(!sortAscending);
  };

  const getLocation = (move: number) => {
    if (move === 0) {
      return "";
    }
    const previousSquares = history[move - 1];
    const currentSquares = history[move];
    for (let i = 0; i < previousSquares.length; i++) {
      if (previousSquares[i] !== currentSquares[i]) {
        const row = Math.floor(i / 3) + 1;
        const col = (i % 3) + 1;
        return `Row: ${row}, Col: ${col}`;
      }
    }
    return "";
  };

  let moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      description =
        "You are at move #" +
        move +
        (move != 0 ? " (Location: " + getLocation(move) + ")" : "");
    } else if (move > 0) {
      description =
        "Go to move #" + move + " (Location: " + getLocation(move) + ")";
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  if (!sortAscending) {
    moves = moves.reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div className="sort">
          <p>Sort {sortAscending ? "Ascending" : "Descending"}: </p>
          <Toggle onToggle={handleToggleSortOrder} value={sortAscending} />
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
