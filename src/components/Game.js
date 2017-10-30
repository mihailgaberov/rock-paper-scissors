import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'
import StyledGameArea from "./styled-components/StyledGameArea";

const Game = ({ player1, player2 }) => (
  <StyledGameArea>
    <Player {...player1} />
    <div>vs</div>
    <Player {...player2} />
  </StyledGameArea>
)

Game.propTypes = {
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired
}

export default Game