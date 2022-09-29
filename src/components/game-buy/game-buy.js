import React from 'react'
import { Button } from '../button'
import { MyButton } from '../button/MyButton'
import "./game-buy.css"

export const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <span className='game-buy_price'>{game.price} zł</span>
            {/* <Button
                type='secondary'
                onClick={() => null}
            />
            To basket
            <Button /> */}

            <MyButton onClick={() => null} disabled>To basket</MyButton>
        </div>
    )
}
