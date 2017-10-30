import React from 'react'
import Weapon from './Weapon'
import PropTypes from 'prop-types'

const Player = ({ label, weapon, score, loading }) => (
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

Player.proptTypes = {
  label: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  score: PropTypes.string,
  loading: PropTypes.bool
}

export default Player
