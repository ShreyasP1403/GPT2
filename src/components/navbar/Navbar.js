import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import LogoutB from '../buttons/LogoutB'
import LoginB from '../buttons/LoginB'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />
                    <h1>GPT 2</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About Us</Link> </li>
                    <li><Link to='/'>Profile</Link></li>
                    {
                        user ? <LogoutB/> : <LoginB/>
                    }
                    
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
