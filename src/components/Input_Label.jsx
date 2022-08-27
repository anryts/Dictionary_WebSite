import React, {useState} from 'react';
import InputWord from "./inputs/input_word";
import Button from "./buttons/button";
import close_icon from './icons/close_icon.png';
import search_icon from './icons/search_icon.png';

const InputLabel = () => {
    const [word, setWord] = useState('Type word');

    const clearInput = (e) => {
        e.preventDefault();
        alert('Clear');
        setWord('');
    }

    const printWord = (e) => {
        e.preventDefault();
        alert(word);
        setWord(word)
    }

const setValue = (e) => {
    setWord(e);
}

    return (
        <form>
            <Button onClick={printWord} icon={close_icon}/>
            <InputWord value={word} type='text' onChange={setValue} />
            <Button onClick= {clearInput}  icon={search_icon}/>
        </form>
    );
};

export default InputLabel;