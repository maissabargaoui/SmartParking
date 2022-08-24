import React from 'react'
import {Link} from 'react-router-dom'
//import {useSelector} from 'react-redux'
//import axios from 'axios'


function Header() {
  

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">VIP Smart Parking</Link></h1>
            </div>
                {
                   
                    <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                       
        </header>
    )
}

export default Header

  