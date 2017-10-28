import React, { Component } from 'react'
import StyledMainContainer from './styled-components/StyledMainContainer'
import Game from './Game'
import GameControls from './GameControls'

class App extends Component {
  render() {
    return (
        <StyledMainContainer>
          <header>
            <h1>Rock, Scissors, Paper</h1>
          </header>
          <Game>
            Main content of the game...
          </Game>
          <GameControls>
            Game controls...
          </GameControls>
        </StyledMainContainer>
    )
  }
}

export default App
