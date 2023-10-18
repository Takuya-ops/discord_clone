import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import "./Chat.scss"
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '../../app/hooks'
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<Messages[]>([]);

  const channelName = useAppSelector((state) => state.channel.channelName)
  // console.log(channelName)
  // 入力した文字が取得できているか確認
  // console.log(inputText)
  
  const channelId = useAppSelector((state) => state.channel.channelId)
  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    // 参照元
    let collectionRef = collection(
      db, "channels",
      String(channelId),
      "messages"
    );

    // 新規の投稿が下に追加されていくようにする
    const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"))

    // chatの投稿をリアルタイムで取得する
    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        })
      })
      setMessages(results)
      // console.log(results)
    })
  })

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 送信を押したときにページをリロードさせないようにする
    e.preventDefault();
    // console.log("send message")

    // channelsコレクション内のmessagesコレクションの中に送信したメッセージを入れる
    const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");
  
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
        {
          message: inputText,
          timestamp: serverTimestamp(),
          user: user,
        }
      );
      // console.log(docRef)
      setInputText("");
    }

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>
      <div className='chatMessage'>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>
      <div className='chatInput'>
        <AddCircle/>
        <form>
          {/* onchangeメソッドで入力した文字を取得できる */}
          <input type="text" placeholder='# Youtubeへメッセージを送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText}/>
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