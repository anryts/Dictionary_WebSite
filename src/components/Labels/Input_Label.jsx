import React, {useState} from 'react';
import InputWord from "../inputs/input_word";
import Button from "../buttons/button";
import close_icon from '../icons/close_icon.png';
import search_icon from '../icons/search_icon.png';

const InputLabel = () => {
    const [word, setWord] = useState('');

    const clearInput = (e) => {
        e.preventDefault();
        setWord('');
    }

    const printWord = (e) => {
        e.preventDefault();
        setWord(word)
    }

const setValue = (e) => {
    setWord(e);
}

    return (
        <div className =
        ' mr-4 border-2 border-to-purple-700 place-items-center flex justify-between bg-white'>
            <Button onClick= {printWord}  icon={search_icon}/>
            <InputWord value={word} type='text' onChange={setValue} />
            <Button onClick={clearInput} icon={close_icon}/>
        </div>
    );
};

export default InputLabel;