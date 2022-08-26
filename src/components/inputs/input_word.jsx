import React from 'react';
import classes from './Input.module.css';
const InputWord = () => {
    return (
        <input className={classes.Input}  placeholder='Type word... (:'>
        </input>
    );
};

export default InputWord;