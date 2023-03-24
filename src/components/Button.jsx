import '../App.css'
import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/Gi'
import { GrClose } from 'react-icons/Gr'

const Button = () => {

    const [Icon, setIcon] = useState(<GiHamburgerMenu color="#54BBB7" size={30} />);
    const [Count, setCount] = useState(1);

    const eventHandler = () => {
        var holder = Count;
        var test = holder % 2;

        if (test !== 0) {
            console.log("Open")
            holder++;
            setCount(holder);
            setIcon(<GrClose color="#54BBB7" stroke="#54BBB7" size={30} />);
        }

        if (test == 0) {
            console.log("Hidden")
            holder++;
            setCount(holder);
            setIcon(<GiHamburgerMenu color="#54BBB7" stroke="#54BBB7" size={30} />);
        }

    }

    return (
        <button onClick={eventHandler} className="btn">{ Icon }</button>
    )

}

export default Button
