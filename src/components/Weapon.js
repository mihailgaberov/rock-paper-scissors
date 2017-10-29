import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'

export class Weapon extends Component {
  render() {
    const { icon, loading } = this.props
    return (
      <div>
         <span className={!loading && icon ? `fa fa-hand-${icon}-o` : 'empty'}
         >
		{!loading && !icon && '?'}
           {loading && <Loader/>}
	</span>
      </div>
    )
  }
}

Weapon.propTypes = {
  icon: PropTypes.string,
  loading: PropTypes.bool
}

export default Weapon