import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Weapon from './Weapon'
import StyledWeapon from './styled-components/StyledWeapon'

class GameControls extends Component {
  render() {

    const {weapons, onClickWeapon} = this.props
    return (
      <div>
        <ul>
          {weapons.map(weapon => (
            <li key={weapon}>
              <StyledWeapon
                onClick={() => onClickWeapon(weapon)}
              >
                <Weapon
                  icon={weapon}
                />
              </StyledWeapon>
            </li>
          ))}
        </ul>
        <label>Pick your weapon</label>
      </div>
    )
  }
}

GameControls.propTypes = {
  weapons: PropTypes.array,
  onClickWeapon: PropTypes.func
}

export default GameControls