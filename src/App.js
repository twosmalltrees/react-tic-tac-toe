import React, { Component } from 'react';
import styled from 'styled-components';


import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  render() {
    return (
        <div id="game">

                <Title>
      Hello World, this is my first styled component!
    </Title>
            <div id="head">
            </div>
  
            <div id="board">
              <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
        </div>
    );
  }
}

export default App;   
