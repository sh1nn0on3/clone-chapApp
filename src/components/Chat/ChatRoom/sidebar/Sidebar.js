import React from 'react'
import RoomList from './RoomList'
import UserInfo from './UserInfo'

export default function Sidebar() {
  return (
    <div className='w-full'>
        <div className='border-b border-slate-300'><UserInfo /></div>
        <div><RoomList /></div>
    </div>
  )
}
