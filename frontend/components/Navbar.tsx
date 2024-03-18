'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = () => {

  const onAvatarClick = () => {
    console.log('Avatar clicked')
  }

  return (
    <div className='flex items-center justify-end shadow'>
      <div className='pr-4 pt-2 pb-2'>
        <Avatar onClick={onAvatarClick} className='cursor-pointer'>
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar
