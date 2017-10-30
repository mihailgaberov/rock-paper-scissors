import React, { Component } from 'react'

import StyledMainContainer from './styled-components/StyledMainContainer'
import Game from './Game'
import GameControls from './GameControls'
import Modes from './Modes'
import gameDataJSON from '../api/game-data.json'


class App extends Component {

  render() {
    return (
        <StyledMainContainer>
          <header>
            <h1>Rock, Scissors, Paper</h1>
          </header>
          <Modes label={'Playing locally'} onClickHandler={()=>{}}/>
          <Game player1={{}} player2={{}} />
          <GameControls onClickWeapon={() => console.log('pick a weapon')}
                        weapons={Object.keys(gameDataJSON.game.weapons)}/>
        </StyledMainContainer>
    )
  }
}

export default App
