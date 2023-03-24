import '../App.css'
import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/Gi'
import { GrClose } from 'react-icons/Gr'

import MobileNav from './MobileNav';
import NormalNav from './NormalNav';

const Navigation = () => {

    const [Nav, setNav] = useState(NormalNav);
    const [Menu, setMenu] = useState(null);
    const [Icon, setIcon] = useState(<GiHamburgerMenu size={30} />);
    const [Count, setCount] = useState(1);

    const eventHandler = () => {
        var holder = Count;
        var test = holder % 2;

        if (test !== 0) {
            console.log("Open")
            holder++;
            setCount(holder);
            setIcon(<GrClose size={30} />);
            setNav(NormalNav);
            setMenu(MobileNav);
        }

        if (test == 0) {
            console.log("Hidden")
            holder++;
            setCount(holder);
            setIcon(<GiHamburgerMenu size={30} />);
            setNav(NormalNav);
            setMenu(null);
        }

    }

    return (
        <header>
            <nav className="Nav__Bar">
                <a href="#Hero" className="Nav__Brand">
                    WorkFlex
                </a>
                {Nav}
                <button onClick={eventHandler} className="btn">{ Icon }</button>
            </nav>
            {Menu}
        </header>
    )
}

export default Navigation