import React, { Component } from 'react';
import styled from 'styled-components';


import './App.css';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: #2B7DE6FF;
  padding: 1rem;
  margin-left:4.5rem;
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
  render() {
    return (
        <div id="game">

            <Title>
              Tic Tac Toe
            </Title>
            
            <div id="head">
            </div>
  
            <Board>
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
        </div>
    );
  }
}

export default App;   
