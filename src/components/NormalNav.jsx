import '../App.css'
import React from 'react'

const NormalNav = () => {
    return (
        <>
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
        </>
    )
}

export default NormalNav