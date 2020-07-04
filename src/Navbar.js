import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

class Navbar extends React.Component {

    render(){
        return(
            <div className ='Navbar'>
                <div className='Navbar-logo'>
                    <Link to='/'>LOGO</Link>
                </div>
                <ul className='Navbar-menu'>
                    <li className='Navbar-menu-item'><Link to='/research'>Research</Link></li>
                    <li className='Navbar-menu-item'><Link to='/search'>Search</Link></li>
                </ul>
                <div className='Navbar-avatar'>
                    <Link to='/user'>avatar</Link>
                </div>
            </div>
        )
    }

}

export default Navbar;