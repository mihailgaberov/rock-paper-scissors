import React, { Component } from 'react'
import Weapon from './Weapon'
import PropTypes from 'prop-types'

export class Player extends Component {
  render() {

    const {label, weapon, score, loading} = this.props
    return (
      <div>
        <div>
          <label>{label}</label>
        </div>
        <Weapon
          icon={weapon}
          loading={loading}
        />
        <div>
          <span>{score}</span>
        </div>
      </div>
    )
  }
}

Player.proptTypes = {
  label: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
}

export default Player
