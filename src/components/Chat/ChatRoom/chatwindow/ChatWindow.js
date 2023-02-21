import React from 'react'
import Header from './Header'
import MessageInput from './MessageInput'

export default function ChatWindow() {
  return (
    <div className='flex flex-col w-full h-[100vh]  '>
      <div className='h-16 '><Header /></div>
      <div className='h-[calc(100%-4rem)] '><MessageInput /> </div>
    </div>
  )
}
