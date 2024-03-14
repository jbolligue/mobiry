import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import './style.css'

const Contents = () =>{
    return (
        <div className="site-content">
            <section className="section-one">
                <div className="section-container">
                    <div className="section-column">
                        <h3 className="section-heading-title">20 minute economy</h3>
                        <p className="section-description">We see the charging period, which takes around 20 minute with a supercharger, not as a drawback but as a valuable opportunity to enhance driver experience and create a new revenue stream for manufacturers and data partners.</p>
                    </div>
                    <div className="section-column">
                            <StaticImage alt="Mobiry Logo" src="../images/img 1.png" />
                    </div>
                </div>
            </section>
            
            <section className="section-one">
                <div className="section-container section-container-gap">
                    <div className="section-column">
                            <StaticImage alt="Mobiry Logo" src="../images/img 2.png" />
                    </div>
                    <div className="section-column">
                        <h3 className="section-heading-title-1">Replace EV Anxiety with EV Calmness</h3>
                        <p className="section-description">At Mobiry, we recognize that the fear of range anxiety and the perceived inconvenience of charging times are major barriers to electric vehicle (EV) adoption.  Our vision is to transform this time into a positive experience and a chance for car manufacturers to stand out. 
                        <br/><br/>
                        What's more, this service isn't limited to EVs—it can also benefit owners of gasoline-powered vehicles, making every journey more enjoyable and rewarding.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contents