import React from 'react'
import burgerLogo from './burger-logo.png'
import './Logo.css'

const Logo = (props) => (
    <div className="Logo">
        <img src={burgerLogo} alt="Burger" />
    </div>
)

export default Logo