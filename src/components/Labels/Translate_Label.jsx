import React, { useEffect, useState } from 'react'
import InputText from '../inputs/input_translate';

export default function Translate_Label() {
  const [text, setText] = useState('');
  const [data , setData] = useState('');
  const [translated_text, setTransText] = useState('');
  const setValue = e =>
  {
    e.preventDefault();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     fetch("https://dictionarapi.azurewebsites.net/api/v1/translate?sentence="+text+"%20world&origin_lang=en&target_lang=ru")
    //     .then((apiData)=>
    //     {
    //         setData(apiData);
    //     });
    // })
    setText(e.target.value)
   
    console.log(text);
  }
  return (
    <div className='grid grid-cols-2'>
        <div className=''>
        <InputText 
        value={text}
        onChange = {setValue} 
        />
        </div>
        <div>
        <InputText
        value={translated_text}
        onChange ={() =>{console.log(translated_text);} }
        />
        </div>
    </div>
  )
}
