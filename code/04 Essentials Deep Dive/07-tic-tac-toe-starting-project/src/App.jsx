import React, { useState } from 'react'

import Player from './Components/Player.jsx'
import GameBoard from './Components/GameBoard.jsx'
import Log from './Components/Log.jsx'
import { WINNING_COMBINATIONS } from './Components/winning-combination.js'
import GameOver from './Components/GameOver.jsx'

const PLAYER = {
  X: 'Player 1',
  Y: 'Player 2',
};

const initailGameBoard = [

  [null, null, null],
  [null, null, null],
  [null, null, null],

];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'Y';
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initailGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [player, setPlayer] = useState(PLAYER);
  const [gameTurns, setGameTurns] = React.useState([]); // [ {player: 'X', rowIndex: 0, colIndex: 1}, {player: 'Y', rowIndex: 1, colIndex: 2}
  // const [activePlayer, setActivePlayer] = React.useState('X');
  // const [hasWinner, setHasWinner] = React.useState(false);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, player);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'Y' : 'X');
    setGameTurns(prevTurns => {
      // let currentPlayer = 'X';

      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'Y';
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: currentPlayer }, ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName,
      };
    });
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player initialName={PLAYER.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
        <Player initialName={PLAYER.Y} symbol='Y' isActive={activePlayer === 'Y'} onChangeName={handlePlayerNameChange}/>
      </ol>
      {(winner || hasDraw) && (<GameOver winner={winner} onRestart={handleRestart}/>)}
      <GameBoard
      onSelectSquare={handleSelectSquare}
      board={gameBoard}
      />
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default App
