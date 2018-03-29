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

const Board = styled.div`
  display:flex;
  width: 300px;
  flex-wrap: wrap;
`;

const Square = styled.div`
  width:100px;
  height: 100px;
  border:1px solid black;
`;



class App extends Component {


   /* creating state for turn and game over */
  constructor() {
    super();
    this.state = {
      turn: 'X',
      gameOver: false,
      board: Array(9).fill('')
    }
  }


  /* logic for making a move for click event */
  clicked(event) {  

    {/* if square is not empty then do not insert x or o */}
    if(this.state.board[event.target.dataset.square] == ''    ) {
        this.state.board[event.target.dataset.square] = this.state.turn;

        event.target.innerText = this.state.turn;

        this.setState({
            turn: this.state.turn == 'X' ? 'O' : 'X',
        board: this.state.board
        })
    }
    console.log(this.state.board);
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
                <Square data-square="0"></Square>
                <Square data-square="1"></Square>
                <Square data-square="2"></Square>
                <Square data-square="3"></Square>
                <Square data-square="4"></Square>
                <Square data-square="5"></Square>
                <Square data-square="6"></Square>
                <Square data-square="7"></Square>
                <Square data-square="8"></Square>
            </Board>
        </Game>
    );
  }
}

export default App;   
