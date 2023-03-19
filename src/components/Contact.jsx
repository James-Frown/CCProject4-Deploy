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
                    Get in contact with us and we'll get back to you!
                </p>
                <div className="Contact__form__Wrapper">
                    <form action="Submit" className="Contact__form">
                        <div className="Form__Item">
                            <label for="Name">Name</label>
                            <input type="text" id="Name"></input>
                        </div>
                        <div className="Form__Item">
                            <label for="Email">Email</label>
                            <input type="email" id="Email" ></input>
                        </div>
                        <div className="Form__Item">
                            <label for="Message">Message</label>
                            <input type="text" id="Message"></input>
                        </div>
                        <button type="submit" className="submit__button">Send</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact