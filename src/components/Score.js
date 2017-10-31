import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './styled-components/StyledButton'
import StyledScore from "./styled-components/StyledScore";

const Score = ({ winner, player1, player2, onClickPlay, loading }) => (
  <StyledScore>
    {winner !== null && !loading && (
      <div>
				<span>
					{winner === 0 ? 'DRAW' : `${(winner === 1 ? player1 : player2)} WINS`}
				</span>
      </div>
    )}
    <div>
      <StyledButton disabled={loading} onClick={onClickPlay}>
        PLAY {(loading || winner !== null) && 'AGAIN'}
      </StyledButton>
    </div>
  </StyledScore>
)

Score.propTypes = {
  winner: PropTypes.number,
  player1: PropTypes.string,
  player2: PropTypes.string,
  onClickPlay: PropTypes.func,
  loading: PropTypes.bool
}

export default Score