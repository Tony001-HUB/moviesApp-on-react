import React from 'react'
import './Header.css'

function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="http://localhost:3000/" className="brand-logo center">Movie</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a  href="https://github.com/Tony001-HUB">Github</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;
