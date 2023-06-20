import { useState } from 'react';
import './App.css';
import { Footer } from './Components/Footer';
import { Game } from './Components/Game';
import { Header } from './Components/Header';
import { Score } from './Components/Score';
import { Button } from './Components/Button';

function App() {

  const combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore: 0, oScore: 0});
  const [gameOver, setGameOver] = useState(false);

  // const board = ["X", "X", "X", "X", "X", "X", "O", "X", "O"]

  const mark = (box) => {
    // console.log(box);
    const updateBoard = board.map((value, index) => {
      if(index === box) return xPlaying ? "X" : "O";
      else return value;
    })

    const winner = checkWinner(updateBoard)

    if (winner) {
      if(winner === "X"){

        let { xScore } = scores;
        xScore += 1;
        setScores({...scores, xScore});
      }else{
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores, oScore});
      }
    }

    console.log(scores);

    // Setting the board after every marking
    setBoard(updateBoard);
    // Changing the player's turn
    setXPlaying(prev => !prev);
  }

  const checkWinner = (board) => {
    for(let i = 0; i < combinations.length; i++){

      const [x, y, z] = combinations[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        // console.log(board[x]);
        setGameOver(true);
        return board[x]
      }

    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <>
    <Header/>
    <div className="container">
      <Score scores={scores} turn={xPlaying}/>
      <Game board={board} mark={gameOver ? resetBoard : mark}/>
      <Button text="Reset" onClick={resetBoard}/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
