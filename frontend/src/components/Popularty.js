import React from 'react'

const star = {
    empty: '☆',
    full: '★'
}

const max_start = 10

export default function Popularty({children}) {
    const fullstars = star.full.repeat(children)
    const emptystarts = star.empty.repeat(max_start-children)
    return (
        <div  style={{fontSize: '1.5rem',color:'#f39c12'}}>
            {fullstars}{emptystarts}
        </div>
    )
}
