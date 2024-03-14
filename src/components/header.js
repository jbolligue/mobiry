import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import './style.css'

const Header = () => {
    return (
        <header className='main-header'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='navbar-logo'>
                        <Link to="/"><StaticImage alt="Mobiry Logo" src="../images/logo.webp" /></Link>
                    </div>
                    <div className='navbar-button'>
                    <a href="/#" className='login-btn'>Client Login</a>
                    <a href="/#" className='demo-btn'>Book a Demo</a>
                    </div>
                </div>
            </div>
        </header>
    )
  }
  
  export default Header