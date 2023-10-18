import React from 'react'
import "./ChatMessage.scss"
import { AccountCircle } from '@mui/icons-material'
import { Timestamp } from 'firebase/firestore';

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}

const ChatMessage = (props: Props) => {
  const {message, timestamp, user} = props;
  return (
    <div className='message'>
      <AccountCircle/>
      {/* 画像をgoogleアカウントのものにしたい時 */}
      {/* <AccountCircle src={user?.photo} /> */}
      <div className='messageInfo'>
        {/* userが存在したときだけ、プロパティを参照する */}
        <h4>{user?.displayName}
          <span className='messageTimestamp'>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage