import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

function Dialog(props){
    let path = "/messages/" + props.id;

    return(
            <div className={s.item}>
                <NavLink 
                    className={({isActive}) => isActive ? `${s.active}` : {}}
                    to={path}
                    
                >{props.name}</NavLink>
            </div>
    )
}

export default Dialog;