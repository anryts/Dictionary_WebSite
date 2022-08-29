import React from 'react';
import  './Input_module.css';

const InputWord = ({value,onChange}) => {
    return (
        <input 
        className='Input_word' 
        value={value} 
        onChange={e=> onChange(e.target.value)} 
        placeholder='Enter word'
        />
  
    );
};

export default InputWord;