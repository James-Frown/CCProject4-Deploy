import '../App.css'
import React from 'react'

import TestemonialsCard from './TestemonialCard'

function Testemonials() {

    return (

        <div id="Testemonials" className="Testemonials">
            <div className="Testemonials__Wrapper">
                <h1 className="Heading">
                    1,000+ Workplace Integrations
                </h1>
                <p className="Description">
                    Don't just take our word for it, see how our digital product has  helped other businesses like yours to achieve success and growth.
                </p>
                <div className="Testemonials__Cards">
                    <TestemonialsCard Image="https://picsum.photos/56" Name="Aaron Almaraz" Bio="CEO & Founder at Gearat" Comm="WORKFLEX has greatly improved our team's productivity and communication." />
                    <TestemonialsCard Image="https://picsum.photos/56" Name="Nadia Wilson" Bio="Freelancer" Comm="As a small business owner, I can say that WORKFLEX has helped me save time and organize work." />
                    <TestemonialsCard Image="https://picsum.photos/56" Name="Jon Madrigal" Bio="Marketing Specialist" Comm="Our team's response time and satisfaction rates have improved dramatically!" />
                    <TestemonialsCard Image="https://picsum.photos/56" Name="Marleah Eagleston" Bio="Founder at Lednet" Comm="I recommend this product to improve workflow and operations." />
                    <TestemonialsCard Image="https://picsum.photos/56" Name="Stavey Madrai" Bio="Lead Marketer at ACME" Comm="We have seen a massive sales team boost  and amount of leads since using WORKFLEX." />
                    <TestemonialsCard Image="https://picsum.photos/56" Name="Steyn Vermeulen" Bio="Marketing Specialist" Comm="As an essential part of our daily operations, we appreciate the stellar customer support." />
                </div>
            </div>
        </div>

    )
}

export default Testemonials