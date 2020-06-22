import React from 'react'
import css from './spinne.module.css'

export default function Spinner(props) {
    const {description} = props
    return (
        <div className={css.flexrow}>
            <div className  ="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
                <div className="circle"></div>
            </div><div className="gap-patch">
                <div className="circle"></div>
            </div><div className="circle-clipper right">
                <div className="circle"></div>
            </div>
            </div>
        </div>
        <p style={{padding: '10px', fontWeight: 'bold', fontSize: '1.5rem'}}>{description}</p>
      </div>
    )
}
