import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const Game = ({player1, player2}) => (
  <div>
    <Player>
      player 1
    </Player>
    <span>vs</span>
    <Player>
      player 2
    </Player>
  </div>
)

Game.propTypes = {
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired
}

export default Game