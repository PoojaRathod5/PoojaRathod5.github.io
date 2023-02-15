import React from "react";
import style from "../Styles/Navbar.module.css"

export const Navbar = () =>{
    return (
    <div className={style.navbar}>
        <div >
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Project</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
    </div>
    )
}