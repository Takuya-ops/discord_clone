import React from 'react'
import ChatHeader from './ChatHeader'
import "./Chat.scss"
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '../../app/hooks'

const Chat = () => {
  // const channelName = useAppSelector((state) => state.channelName)

  return (
    <div className='chat'>
      <ChatHeader/>
      <div className='chatMessage'></div>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      <div className='chatInput'>
        <AddCircle/>
        <form>
          <input type="text" placeholder='# Youtubeへメッセージを送信'/>
          <button type="submit" className='chatInputButton'>
             送信
          </button>
        </form>
        <div className='chatInputIcons'>
          <CardGiftcard/>
          <Gif/>
          <EmojiEmotions/>
        </div>
      </div>
    </div>
  )
}

export default Chat