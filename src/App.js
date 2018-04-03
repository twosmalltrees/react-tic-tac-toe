import React, { Component } from 'react';
import styled from 'styled-components';


import './App.css';


const Game = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2B7DE6FF;
  padding: 1rem;
`;

const Status = styled.h2`
  font-size: 1em;
  text-align: center;
  color: black;
  padding: 1rem;
`;

const Score = styled.h2`
  font-size: 1em;
  text-align: center;
  color: black;
  padding: 1rem;
`;

const Board = styled.div`
  display:flex;
  width: 300px;
  flex-wrap: wrap;
`;

const Square = styled.div`
  width:100px;
  height: 100px;
  border:1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;



class App extends Component {


   /* creating state for turn and game over */
  constructor() {
    super();
    this.state = {
      winner: undefined,
      turn: 'X',
      gameOver: false,
      board: Array(9).fill(''),
      totalMoves: 0,
    }

  }


  /* logic for making a move for click event */
  clicked(event) {  

    if(this.state.gameOver) return;

    {/* if square is not empty then do not insert x or o */}
    if(this.state.board[event.target.dataset.square] == '') {
        this.state.board[event.target.dataset.square] = this.state.turn;

        
        this.state.turn = this.state.turn == 'X' ? 'O' : 'X',

     
        this.state.totalMoves++;

    }

    var result = this.checkWinner();

    if(result == 'X') {
      this.state.gameOver = true;
      this.setState({
        winner: 'X',
        winnerLine: 'X wins',
        xScore: +1,
      });

    }else if(result == 'O') {
      this.state.gameOver = true;
      this.setState({
        gameOver:true,
        winner: 'O',
        winnerLine: 'O wins',
        oScore: +1
      });

    }else if(result =='draw') {
      this.state.gameOver = true;
      this.setState({
        gameOver:true,
        winner: 'draw',
        winnerLine: 'Match Draw',
        dScore: +1
      })
    }
  }

  handleReset(){
        console.log("RESET");
        this.setState({
          winner: undefined,
          turn: 'X',
          gameOver: false,
          board: Array(9).fill(''),
          totalMoves: 0,
        })
        Square.innerText = '';
    };

  checkWinner() {
      var moves = [[0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]]
      var board = this.state.board;
      for(let i=0;i<moves.length;i++) {
        if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]]) {
          return board[moves[i][0]];
        }
      }

      console.log(this.state.totalMoves);
      if(this.state.totalMoves == 9) {
        return 'draw';
      } 
  }

  render() {
    return (
        <Game>
            <Title>
              Tic Tac Toe
            </Title>

            <div id="head">
            </div>
            
            {/* create the board and click event to place a move inside a square */}
            <Board onClick={(e)=>this.clicked(e)}>
                <Square data-square="0">{this.state.board[0]}</Square>
                <Square data-square="1">{this.state.board[1]}</Square>
                <Square data-square="2">{this.state.board[2]}</Square>
                <Square data-square="3">{this.state.board[3]}</Square>
                <Square data-square="4">{this.state.board[4]}</Square>
                <Square data-square="5">{this.state.board[5]}</Square>
                <Square data-square="6">{this.state.board[6]}</Square>
                <Square data-square="7">{this.state.board[7]}</Square>
                <Square data-square="8">{this.state.board[8]}</Square>
            </Board>

            <Status>{this.state.winnerLine}</Status>
            <Score>X points: {this.state.xScore}</Score>
            <Score>O points: {this.state.oScore}</Score>
            <Score>Draws: {this.state.dScore}</Score>

            <div className="reset">
                    <button onClick={() => this.handleReset()} className="resetButton">RESET</button>
            </div>

        </Game>
    );
  }
}

export default App;   
