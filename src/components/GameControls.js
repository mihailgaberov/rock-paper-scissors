import React from 'react'
import PropTypes from 'prop-types'
import Weapon from './Weapon'
import StyledWeapon from './styled-components/StyledWeapon'
import StyledGameControls from "./styled-components/StyledGameControls";

const GameControls = ({weapons, onClickWeapon }) => (
  <StyledGameControls>
    <label>Pick your weapon</label>
    <ul>
      {weapons.map(weapon => (
        <li key={weapon}>
          <StyledWeapon onClick={() => onClickWeapon(weapon)}>
            <Weapon icon={weapon}/>
          </StyledWeapon>
        </li>
      ))}
    </ul>
  </StyledGameControls>
)



GameControls.propTypes = {
  weapons: PropTypes.array,
  onClickWeapon: PropTypes.func
}

export default GameControls