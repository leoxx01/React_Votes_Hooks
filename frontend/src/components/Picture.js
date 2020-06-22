import React from 'react'
import css from './picture.module.css'

export default function Picture(props) {
    const{ imageSource, description} = props
    return (
        <div style={{marginTop: '15px', marginRight: '15px'}}>
            <img className={css.img} src={imageSource} alt={description}/>
        </div>
    )
}
