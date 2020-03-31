import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong> {props.price.toFixed(2)} </strong></p>
            {controls.map(el => (
                <BuildControl
                    key={el.label}
                    label={el.label}
                    added={() => props.ingredientAdded(el.type)}
                    remove={() => props.ingredientRemove(el.type)}
                    disabled={props.disabled[el.type]}
                />
            ))}
            <button
                className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}>Order now</button>
        </div>
    )
}

export default BuildControls