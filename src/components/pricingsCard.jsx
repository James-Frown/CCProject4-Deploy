import '../App.css'
import React from 'react';

const PricingsCard = (props) => {

  const Name = props.Name;
  const Bio = props.Bio;
  const Price = props.Price;
  const Date = props.Date;

  return (
    <div className="Pricings__Card">
      <div className="Pricings__Card__Top">
        <p className="Pricings__Plan__Name">
          {Name}
        </p>
        <p className="Pricings__Plan__Bio">
          {Bio}
        </p>
      </div>
      <div className="Pricings__Card__Middle">
        <p className="Pricings__Plan__Price">
          {Price}
        </p>
        <p className="Pricings__Plan__Date">
          {Date}
        </p>
      </div>
    </div>
  )
}

export default PricingsCard