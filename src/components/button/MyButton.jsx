import React from 'react'
import classes from './button.css'

export const MyButton = (props) => {
  return (
    <button className={classes.myBtn}>
        {props.children}
    </button>
  )
}

export default MyButton;
