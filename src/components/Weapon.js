import React from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'

const Weapon = ({ icon, loading }) => (
  <div>
    <span className={!loading && icon ? `fa fa-hand-${icon}-o` : 'empty'}>
		{!loading && !icon && '?'}
    {loading && <Loader/>}
	</span>
  </div>
)

Weapon.propTypes = {
  icon: PropTypes.string,
  loading: PropTypes.bool
}

export default Weapon