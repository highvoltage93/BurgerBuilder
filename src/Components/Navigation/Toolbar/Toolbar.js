import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationsItems'

const Toolbar = (props) => (
    <header className="Toolbar">
        <button onClick={props.drawerToggleClicked}>Menu</button>
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar