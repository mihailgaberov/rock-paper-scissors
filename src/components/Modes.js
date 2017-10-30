import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './styled-components/StyledButton'
import StyledModesArea from './styled-components/StyledModesArea'

const Modes = ({ label, onClickHandler }) => (
  <StyledModesArea>
    <StyledButton
      onClick={onClickHandler}
    >
      Change mode
    </StyledButton>
    <label>{label}</label>
  </StyledModesArea>
)

Modes.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

export default Modes
