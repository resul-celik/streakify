import Button from "./Buttons"
import Dropdown from "./Dropdown"
import Options from "../Options"
import { useState } from "react"

const Header = ({leftCol, rightCol, className}) => {

    return (
        <div className={`header ${className ? className : ''}`}>
            <div className="header-left">
                {leftCol()}
            </div>
            <div className="header-right">
                {rightCol()}
            </div>
        </div>
    )
}

export default Header