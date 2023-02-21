import React from 'react'
import Header from './Header'
import MessageInput from './MessageInput'

export default function ChatWindow() {
  return (
    <div className='flex flex-col w-full h-[100vh] '>
      <div><Header /></div>
      <div className='h-full'><MessageInput /> </div>
    </div>
  )
}
