import React from 'react'
import './link.scss'

const Link = ({onClick, title}) => {
    return (
        <div>
            <p className="link" onClick={onClick}>{title}</p>
        </div>
    )
}

export default Link
