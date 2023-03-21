import '../App.css'
import React from 'react'

import Button from './Button'

function NewNavigation() {
    return (
        <header>
            <nav className="Nav__Bar">
                <a href="#Hero" className="Nav__Brand">
                    WorkFlex
                </a>
                <ul className="Nav__Menu">
                    <li className="Nav__Item">
                        <a href="#Features" className="Nav__Link">Features</a>
                    </li>
                    <li className="Nav__Item">
                        <a href="#Intergrations" className="Nav__Link">Integrations</a>
                    </li>
                    <li className="Nav__Item">
                        <a href="#Testemonials" className="Nav__Link">Testimonials</a>
                    </li>
                    <li className="Nav__Item">
                        <a href="#Pricing" className="Nav__Link">Pricing</a>
                    </li>
                    <li className="Nav__Item">
                        <a href="#Contact" className="Nav__Link">Contact Us</a>
                    </li>
                </ul>
                <Button />
            </nav>
        </header>
    )
}

export default NewNavigation