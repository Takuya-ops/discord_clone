import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import "./Chat.scss"
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '../../app/hooks'

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");

  const channelName = useAppSelector((state) => state.channel.channelName)
  // console.log(channelName)
  // 入力した文字が取得できているか確認
  // console.log(inputText)
  
  const sendMessage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 送信を押したときにページをリロードさせないようにする
    e.preventDefault();
    // console.log("send message")
  };

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>
      <div className='chatMessage'></div>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      <div className='chatInput'>
        <AddCircle/>
        <form>
          {/* onchangeメソッドで入力した文字を取得できる */}
          <input type="text" placeholder='# Youtubeへメッセージを送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}/>
          <button type="submit" className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
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