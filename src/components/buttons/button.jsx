import React from 'react';
import './edit_buttons_style.css';
import './icons.css'


const Button = ({name,onClick, icon}) => {
    return (
        <button onClick={onClick} className='button'>
             {/*eslint-disable-next-line react/style-prop-object */}
            {icon ? <img className='img' src={icon} alt='icon'/> : null}
        </button>
    );
};

export default Button;