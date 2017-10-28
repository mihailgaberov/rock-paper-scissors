import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledButton from './styled-components/StyledButton'
import StyledModesArea from './styled-components/StyledModesArea'

export class Modes extends Component {

  render() {
    const { label, onClickHandler } = this.props

    return (
      <StyledModesArea>
        <StyledButton
          onClick={onClickHandler}
        >
          Change mode
        </StyledButton>
        <label>{label}</label>
      </StyledModesArea>
    )
  }
}

Modes.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

export default Modes
