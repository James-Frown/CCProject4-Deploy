import '../App.css'
import React from 'react'

import FeaturesCard from './FeaturesCard'

function Features() {

    return (

        <div id="Features" className="Features">
            <div className="Features__Wrapper">
                <h1 className="Heading">
                    100% Seamless Experience
                </h1>
                <p className="Description">
                    Enjoy the effortless integration into your workspace with our custom built experience!
                </p>
                <div className="Features__Cards">
                    <FeaturesCard Heading="Shift Rotation" Description="Easily manage employee shift rotations!" />
                    <FeaturesCard Heading="Calendar Syncing" Description="Automatically sync calendars with shift rotations." />
                    <FeaturesCard Heading="Real-time Notifications" Description="Receive real-time notifications when changes are made." />
                </div>
            </div>
        </div>

    )
}

export default Features