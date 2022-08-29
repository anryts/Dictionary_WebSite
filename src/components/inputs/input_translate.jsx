import React from 'react'
import  './Input_module.css';

export default function InputText({value, onChange}) {
  return (
    <textarea 
    value = {value}
    onChange ={onChange}
    className='Input_translate' 
    placeholder='Some Text'>
    </textarea>
  )
}
