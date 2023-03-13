import '../App.css'
import React from 'react'

import {BsFillPeopleFill} from 'react-icons/bs'

function FeaturesCard(props) {

  const Heading = props.Heading;
  const Description = props.Description;

  return (
    <div className="featuresCard">
      <div className="featuresCard__Wrapper">
        <h1 className="featuresCard__Heading">
          {Heading}
        </h1>
        <div className="featuresCard__Divider"></div>
        <p className="featuresCard__Description">
          {Description}
        </p>
      </div>
    </div>
  )
}

export default FeaturesCard
