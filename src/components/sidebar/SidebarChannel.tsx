import React from 'react'
import "./SidebarChannel.scss"
import { DocumentData } from 'firebase/firestore'
import { useAppDispatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';

// Firestoreから受け取るデータ
type Props = {
  id: string;
  channel: DocumentData;
}

const SidebarChannel = (props: Props) => {
  // 分割代入
  const { id, channel } = props;
  const dispatch = useAppDispatch();

  return (
    <div>
      <h4 
        className='sidebarChannel'
        onClick={() => {
          dispatch(
            setChannelInfo({
              channelId: id,
              channelName: channel.channel.channelName,
            })
          )}}>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel