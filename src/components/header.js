import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import './style.css'

const Header = () => {
    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };
    return (
        <header className='main-header'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='navbar-logo'>
                        <Link to="/"><StaticImage alt="Mobiry Logo" src="../images/logo.webp" /></Link>
                    </div>
                    <div className="navbar-mobile">
                        <button className="navbar-mobile-button" onClick={toggleDiv}>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                                {/* <i className="navbar-mobile-icon"></i> */}
                        </button>
                    </div>
                    <div className='navbar-button'>
                    <a href="/#" className='login-btn'>Client Login</a>
                    <a href="/#" className='demo-btn'>Book a Demo</a>
                    </div>
                </div>
                {showDiv && 
                <div className="navbar-mobile-collapsable">
                    <ul className="navbar-mobile-menu">
                        <li>Hello</li>
                        <li>Hello</li>
                    </ul>
                </div>
                }
                
            </div>
        </header>
    )
  }
  
  export default Header