import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import './style.css'

const Footers = () => {
    return (
        <footer className='main-footer'>
            <div className='container'>
                <div className="footer-content-container">
                    <div className="footer-content">
                        <h3 className="footer-heading-title">Get a Deck</h3>
                        <p className="footer-description">To download a deck please enter your work email address to proceed. At the moment it is available for vehicle manufacturers only.</p>
                        <form onSubmit={null}>
                            <div className="footer-input-container">
                                <input type='email' placeholder='email@here'/>
                                <button type='submit'>Download</button>
                            </div>
                        </form>
                    </div>
                    <div className="footer-content footer-mobile">
                        <StaticImage alt="Mobiry Logo" src="../images/img 3.png" />
                    </div>
                </div>
            </div>
            
            <div className='footer-list'>
                    <div className='footer-list__designed'>
                            <p> © Mobiry International Inc. Designed by <a href="https://integrio.net/">Integrio Systems</a></p>
                    </div>
                    <div className='footer-list__sci'>
                    <Link to="/"><StaticImage alt="Mobiry Linkedin" src="../images/linkedin.png" /></Link>
                    </div>
                </div>
        </footer>
        
    )
  }
  
  export default Footers