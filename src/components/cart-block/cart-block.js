import React from "react";
import { BiCart } from "react-icons/bi"
import './cart-block.css'

export const CartBlock = () => {
    return (
        <div className='cart-block'>
            <BiCart size={25} className='cart-block_icon' />
            <span className="cart-block_total-price">1222 zł</span>
        </div>
    );
};
