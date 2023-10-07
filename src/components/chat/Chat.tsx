import React from 'react'
import ChatHeader from './ChatHeader'
import "./Chat.scss"

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader/>
      <div className='chatMessage'></div>
      <div className='chatInput'></div>
    </div>
  )
}

export default Chat