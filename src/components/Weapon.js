import React from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'
import StyledWeapon from "./styled-components/StyledWeapon";

const Weapon = ({ icon, loading }) => (
  <StyledWeapon>
    <span className={!loading && icon ? `fa fa-hand-${icon}-o` : 'empty'}>
		{!loading && !icon && '?'}
      {loading && <Loader/>}
	</span>
  </StyledWeapon>
)

Weapon.propTypes = {
  icon: PropTypes.string,
  loading: PropTypes.bool
}

export default Weapon