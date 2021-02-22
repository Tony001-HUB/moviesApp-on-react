import React from 'react'
import './Header.css'

function Header() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">Movie</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a  href="https://github.com/Tony001-HUB">Github</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;
