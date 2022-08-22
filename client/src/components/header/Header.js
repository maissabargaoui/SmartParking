import React from 'react'
import {Link} from 'react-router-dom'


function Header() {


    

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">DevAT✮Shop</Link></h1>
            </div>

            <ul style={transForm}>
                <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                {
                    isLogged
                    ? userLink()
                    :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                
            </ul>
        </header>
    )
}

export default Header
