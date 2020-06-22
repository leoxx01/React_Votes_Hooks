import React from 'react'
import {formaterNumber} from './FomarterNumber'

export default function Votes({children}) {
    return (
        <div  style={{color:'gray'}}>
            {formaterNumber(children)}
        </div>
    )
}
