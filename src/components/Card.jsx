import React, { memo } from 'react'

export default memo(function Card({ title = "", rooms = "", address = "", area="" }) {
    return (
        <div className="card">
            <p className="title">
                {title}
            </p>
            <div className="description">
                <div className="description__row rooms">
                    Количество комнат: {rooms}
                </div>
                <div className="description__row address">
                    {address}
                </div>
                <div className="description__row area">
                    {area}
                </div>
            </div>
        </div>
    )
})
