import React, { memo } from 'react'

export default memo(function Card({ src, legend }) {
    return (
        <div>
            <img src={src} />
            <p className='legend'>{legend}</p>
            <i class="material-icons">favorite</i>
        </div>
    )
})
