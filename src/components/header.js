import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaBug, FaTwitter } from 'react-icons/fa'

const Header = ({ siteTitle }) => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='nav-logo'> <FaBug /> </div>
      </Link>
      <ul className='nav-menu'>
        <li className='nav-menu-li'>
          <Link className='nav-menu-item' to='/articulos/'>Artículos</Link>
        </li>
        <li className='nav-menu-li'>
          <Link className='nav-menu-item' to='/tutoriales/'>Tutoriales</Link>
        </li>
        <li className='nav-menu-li'>
          <Link className='nav-menu-item' to='#'>Videos</Link>
        </li>
      </ul>
      <div className='nav-social'>
        <a className='nav-menu-item' target='_blank' href='https://twitter.com/Pedro_412'>
          <FaTwitter size='26px' />
        </a>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
