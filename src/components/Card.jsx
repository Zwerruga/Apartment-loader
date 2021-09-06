import React, { memo } from 'react'
import './card.css'

export default memo(function Card({
    title = "",
    rooms = "",
    address = "",
    area = "",
    onLikeClick = () => { },
    like = false }) {
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
                <i className={"material-icons".concat(like ? " active" : "")} onClick={onLikeClick}>favorite</i>
            </div>
        </div>
    )
})
