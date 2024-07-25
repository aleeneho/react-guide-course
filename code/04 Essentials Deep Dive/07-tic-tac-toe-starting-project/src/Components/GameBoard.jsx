import React from 'react';

// const initailGameBoard = [

//   [null, null, null],
//   [null, null, null],
//   [null, null, null],

// ];

export default function GameBoard({ onSelectSquare, board}) {
  // let gameBoard = initailGameBoard;

  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }

  // const [gameBoard, setGameBoard] = React.useState(initailGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // prevGameBoard[rowIndex][colIndex] = 'X';
  //     // return prevGameBoard;
  //     const updatedboard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedboard;

  //   });

  //   onSelectSquare();


  return (
  <ol id='game-board'>
    {board.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
  );
}
