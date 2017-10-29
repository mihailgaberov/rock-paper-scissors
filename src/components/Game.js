import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

class Game extends Component {
  render() {
    return (
      <div>
        <Player>
          player 1
        </Player>
        <span>vs</span>
        <Player>
          plyaer 2
        </Player>
      </div>
    )
  }
}

Game.propTypes = {
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired
}

export default Game