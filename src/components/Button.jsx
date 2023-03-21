import '../App.css'
import React from 'react'
import { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/Gi'
import { GrClose } from 'react-icons/Gr'

function Button() {

    const [btnState, setBtnState] = useState(false);

    /*
    const btnActive = () => {
        <div className="Hamburger__Open__Icon"><GiHamburgerMenu size={30} /></div>
    }

    const btnNotActive = () => {
        <div className="Hamburger__Close__Icon"><GrClose size={30} /></div>
    }
*/
    function btnHandler() {

        setBtnState(btnState => !btnState);
        console.log(btnState)
    }

    let toggleClassCheck = btnState ? ' active': '';

    return (
        <button onClick={btnHandler} className={`btn${toggleClassCheck}`}>place holder</button>
    )

}

export default Button
