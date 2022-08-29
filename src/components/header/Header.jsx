import React from 'react'
import login_icon from '../icons/login_icon.png'
import Button from "../buttons/button";
import Input_Label from "../Labels/Input_Label";
import './header_style.css'
import logo_website from '../icons/logo_website.png'

export default function Header() {
  const  login= () => {
    alert('what are you doing?');
    }
    return (
    <div className=' header pb-4 fixed w-full'>
      <div className='header_title'>
        <h1>TRANSLATOR</h1>
        <h1>DICTIONARY</h1>
        <div className='justify-end'>
        <Button  onClick={login} icon={login_icon}/>
        </div>
      </div>
      <div className='header_under_title'>
        <div className='m-auto'>
        <Button  onClick={login} icon={logo_website}/>
        </div>
        <Input_Label/>
      </div>
    </div>
  )
}