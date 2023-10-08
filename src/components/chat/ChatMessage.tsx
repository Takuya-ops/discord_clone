import React from 'react'
import "./ChatMessage.scss"
import { AccountCircle } from '@mui/icons-material'

const ChatMessage = () => {
  return (
    <div className='message'>
      <AccountCircle/>
      <div className='messageInfo'>
        <h4>Takuya
          <span className='messageTimestamp'>2023/11/1</span>
        </h4>
        <p>メッセージ本文！</p>
      </div>
    </div>
  )
}

export default ChatMessage