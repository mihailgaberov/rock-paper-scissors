import React, { Component } from 'react'
import StyledMainContainer from './styled-components/StyledMainContainer'
import Game from './Game'
import GameControls from './GameControls'
import Modes from './Modes'

class App extends Component {
  render() {
    return (
        <StyledMainContainer>
          <header>
            <h1>Rock, Scissors, Paper</h1>
          </header>
          <Modes label={'Playing locally'} onClickHandler={()=>{}}/>
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
