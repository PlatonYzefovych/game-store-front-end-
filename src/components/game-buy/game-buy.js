import React from 'react'
import { Button } from '../button'
import "./game-buy.css"

export const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <span className='game-buy_price'>{game.price} zł</span>
            <Button
                type='primary'
                onClick={() => null}
            />
            To basket
            <Button />
        </div>
    )
}
