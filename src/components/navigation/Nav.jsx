import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Nav.module.css"
import { UilUser, UilEnvelope, UilHome, UilMusic, UilSetting } from '@iconscout/react-unicons'

function Nav(props){

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        document.getElementsByClassName(s.menu)[0].classList.toggle(s.active)
    };

    return(
        <div className={s.menu}>
            <div className={s.toggle} onClick={toggleClass}>
                <img src="https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/10/eb77e4164e70efbb52e007935ab57ec5.jpg" alt=""></img>
            </div>
            <ul className={s.nav}>
                <li className={s.item} style={{'--i':0}}>
                    <NavLink 
                        to="/bubbly/profile"
                        className = {({isActive}) => isActive ? `${s.active}` : ""}
                        onClick={props.showContent}
                        >
                        <UilUser/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':1}}>
                    <NavLink 
                        className = {({isActive}) => isActive ? `${s.active}` : ""} 
                        to="/bubbly/messages" 
                        onClick={props.showContent}
                        >
                        <UilEnvelope/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':2}}>
                    <NavLink 
                        className = {({isActive}) => isActive ? `${s.active}` : ""} 
                        to="/bubbly/news" 
                        onClick={props.showContent}
                        >
                        <UilHome/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':3}}>
                    <NavLink 
                        className = {({isActive}) => isActive ? `${s.active}` : ""} 
                        to="/bubbly/music" 
                        onClick={props.showContent}
                        >
                        <UilMusic/>
                    </NavLink>
                </li>
                <li className={s.item} style={{'--i':4}}>
                    <NavLink 
                        className = {({isActive}) => isActive ? `${s.active}` : ""} 
                        to="/bubbly/settings" 
                        onClick={props.showContent}
                        >
                        <UilSetting/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;