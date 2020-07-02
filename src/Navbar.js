import React from 'react'

import './Navbar.css'

class Navbar extends React.Component {

    render(){
        return(
            <div className ='Navbar'>
                <div className='Navbar-logo'>
                    LOGO
                </div>
                <ul className='Navbar-menu'>
                    <li className='Navbar-menu-item'>Research</li>
                    <li className='Navbar-menu-item'>Search</li>
                </ul>
                <div className='Navbar-avatar'>
                    avatar
                </div>
            </div>
        )
    }

}

export default Navbar;