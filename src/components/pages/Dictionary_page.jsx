/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Translate_Label from '../Labels/Translate_Label';

const Dictionary_page = () => {
    return (
        <div >
           <div className='mt-14 m-5 border-2'>
            <div className='grid grid-cols-3'>
                <button >1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className='border-t-2'>
                <Translate_Label/>
            </div>
           </div>
        </div>
    );
};

export default Dictionary_page;