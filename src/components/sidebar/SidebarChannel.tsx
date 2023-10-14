import React from 'react'
import "./SidebarChannel.scss"
import { DocumentData } from 'firebase/firestore'

// Firestoreから受け取るデータ
type Props = {
  id: string;
  channel: DocumentData;
}

const SidebarChannel = (props: Props) => {
  // 分割代入
  const { id, channel } = props
  return (
    <div>
      <h4 className='sidebarChannel'>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel