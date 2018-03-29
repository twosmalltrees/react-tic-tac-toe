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

  constructor() {
    super();
    this.state = {
      turn: 'X',
      gameOver: false
    }
  }

  clicked(event) {  
    event.innerText = this.state.turn;
    this.setState({
        turn:this.state.turn == 'X' ? 'O' : 'X'
    })
  }

  render() {
    return (
        <Game>

            <Title>
              Tic Tac Toe
            </Title>

            <div id="head">
            </div>
  
            <Board onClick={(e)=>this.clicked(e.target)}>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </Board>
        </Game>
    );
  }
}

export default App;   
