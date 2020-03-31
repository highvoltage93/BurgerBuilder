import React from 'react'
import './../NavigationItems.css'

const NavigationItem = (props) => (
    <li className="NavigationItem">
        <a href={props.link} className={props.active ? 'active' : null}>Link</a>
    </li>
)


export default NavigationItem