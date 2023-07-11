import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
      checkWinner(newBoard, player);
    }
  };

  const checkWinner = (board, currentPlayer) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(currentPlayer);
        break;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setPlayer('X');
    setWinner(null);
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      {board.map((cell, index) => (
        <Grid item key={index} xs={4} p={2}>
          <Button
            variant="contained"
            color={winner ? 'secondary' : 'primary'}
            disabled={cell || winner}
            onClick={() => handleClick(index)}
            style={{ width: '100%', height: '100%' }}
          >
            {cell}
          </Button>
        </Grid>
      ))}
      {winner && (
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={resetGame}>
            Reset Game
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Board;
