import '../App.css'
import React from 'react'

function Hero() {

    return (

        <div id="Hero" className="Hero">
            <div className="Hero__Wrapper">
                <h1 className="Heading">
                    Effortless Online Scheduling
                </h1>
                <p className="Description">
                    WorkFlex is a comprehensive employee scheduling platform that enables businesses to manage staff and shift rotations with ease, ensuring that employees get the most out of their workdays.
                </p>
                <div className="Hero__Image">
                    <img className="Hero__Image__Selector" src="https://schalkventer.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f4e4bed-5d38-4c52-8965-25c6686b57c6%2Fscreencapture-themesbrand-hybrix-html-apps-contact-html-2023-01-26-16_44_19.png?id=68bda683-55c4-4622-95ce-59b3a9ab641a&table=block&spaceId=e6fa3002-8b27-40bd-aebe-9c56cd3d2122&width=2000&userId=&cache=v2"></img>
                </div>
            </div>
        </div>

    )
}

export default Hero