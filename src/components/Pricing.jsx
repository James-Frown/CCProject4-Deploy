import '../App.css'
import React from 'react'
import PricingsCard from './PricingsCard'

const Pricing = () => {

  return (

    <div id="Pricing" className="Pricing">
      <div className="Pricing__Wrapper">
        <h1 className="Heading">
          Start Today!
        </h1>
        <p className="Description">
          Affordable and transparent digital dashboard pricing.
        </p>
        <div className="Pricing__Cards">

          <PricingsCard Name="Educational Plan" Bio="For Students and Lectures!" Price="$1.00" Date="Billed Yearly" />
          <PricingsCard Name="Basic Plan" Bio="For Start Up Business's!" Price="$60.00" Date="Billed Monthly" />
          <PricingsCard Name="Enteprize Professional Plan" Bio="The Full package for coporate use!" Price="$250.00" Date="Billed Monthly" />

        </div>
      </div>
    </div>

  )
}

export default Pricing