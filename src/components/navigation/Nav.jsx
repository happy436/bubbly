import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Nav.module.css"
import { UilUser, UilEnvelope, UilHome, UilMusic, UilSetting } from '@iconscout/react-unicons'

function Nav(){
/*  let toggle = document.querySelector(s.toggle);
    let menu = document.querySelector(s.menu);

    toggle.onclick = function(){
        menu.classList.toggle(s.active)
    } */
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        document.getElementsByClassName(s.menu)[0].classList.toggle(s.active)
    };

    return(
        <div className={s.menu}>
            <div className={s.toggle} onClick={toggleClass} ></div>
            <ul className={s.nav}>
                <li className={s.item} style={{'--i':0}}>
                    <NavLink activeClassName={s.active} to="/">
                        <UilUser/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':1}}>
                    <NavLink activeClassName={s.active} to="/messages">
                        <UilEnvelope/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':2}}>
                    <NavLink activeClassName={s.active} to="/news">
                        <UilHome/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':3}}>
                    <NavLink activeClassName={s.active} to="/music">
                        <UilMusic/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':4}}>
                    <NavLink activeClassName={s.active} to="/settings">
                        <UilSetting/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;