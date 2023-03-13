import '../App.css'
import React from 'react'

function Navigation() {

    return (

        <div id="Navigation" className="Navigation">
            <div className="Navigation__Wrapper">
                <div className="Navigation__Logo">
                    WorkFlex
                </div>
                <div className="Navigation__Links">
                    <div className="Navigation__Item">
                        <a href="#Features" id="Fetures__Link" className="Navigation__Item__Text">Features</a>
                    </div>
                    <div className="Navigation__Item">
                        <a href="#Intergrations" id="Intergrations__Link" className="Navigation__Item__Text">Integrations</a>
                    </div>
                    <div className="Navigation__Item">
                        <a href="#Testemonials" id="Testemonials__Link" className="Navigation__Item__Text">Testimonials</a>
                    </div>
                    <div className="Navigation__Item">
                        <a href="#Pricing" id="Pricing__Link" className="Navigation__Item__Text">Pricing</a>
                    </div>
                    <div className="Navigation__Item">
                        <a href="#Contact" id="Contact__Link" className="Navigation__Item__Text">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navigation