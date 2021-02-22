import React from 'react'
function Footer() {
    return(
        <footer className="page-footer deep-orange lighten-1">
         
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Tony001-HUB">Github</a>
            </div>
        </div>
        </footer>
    )
}
export default Footer;