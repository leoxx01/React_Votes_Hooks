import React from 'react'

export default function Percenter({children}) {
    return (
        <div style={{color:'gray'}}>
            {children.toFixed(2) + "%"}
        </div>
    )
}
