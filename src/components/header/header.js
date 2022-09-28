import React from "react";
import {Link} from "react-router-dom";
import {CartBlock} from '../cart-block/cart-block'
import './header.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <Link to='/' className='header_store-title'>
                    GameStore
                </Link>
            </div>
            <div className='wrapper header_card-btn-wrapper'>
                <CartBlock />
            </div>
        </div>
    );
};
