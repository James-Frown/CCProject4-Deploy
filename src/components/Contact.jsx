import '../App.css'
import React from 'react'

function Contact() {

    return (

        <div id="Contact" className="Contact">
            <div className="Contact__Wrapper">
                <h1 className="Heading">
                    Contact Us
                </h1>
                <p className="Description">
                    Send us a message and let us know your thourghts!
                </p>
                <div className="Contact__form__Wrapper">
                    <form action="Submit" className="Contact__form">
                        <label></label>
                        <input></input>
                        <label></label>
                        <input></input>
                        <button className="submit__button"></button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact