import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarChannel from './SidebarChannel';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollection from '../../hooks/useCollection';
import { addDoc, collection } from 'firebase/firestore';
// import { collection, query } from 'firebase/firestore/lite';


const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user)
  const { documents: channels } = useCollection("channels")

  const addChannel = async () => {
    let channelName: string | null = prompt("新しいチャンネルを追加します。")
    
    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName
      })
    }
  }

  return (
    <div className='sidebar'>
      <div className='sidebarLeft'>
        <div className='sidebarIcon'>
          <img src="./logo192.png" alt=""/>
        </div>
        <div className='sidebarIcon'>
          <img src="./logo192.png" alt=""/>
        </div>
      </div>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>
          <ExpandMoreIcon/>
        </div>
        <div className='sidebarChanels'>
          <div className='sidebarChanelsHeader'>
          </div>
            <div className='sidebarHeader'>
              <ExpandMoreIcon/>
              <h4>プログラミングチャンネル</h4>
              <AddIcon className='sidebarAddIcon' onClick={() => addChannel()}/>
            </div>
            <div className='sidebarChannelList'>
              {channels.map((channel) => (
                <SidebarChannel channel={channel} id={channel.id} key={channel.id}/>
              ))}
            </div>

            <div className='sidebarFooter'>
              <div className='sidebarAccount'>
                {/* nullの状態がある可能性のあるものは?を付ける */}
                {/* <img src={user?.photo} alt="" onClick={() => auth.signOut()}/> */}
                <img src={"./logo192.png"} alt="" onClick={() => auth.signOut()}/>
              </div>
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                {/* 最初の5文字だけ取り出す */}
                <span>#{user?.uid.substring(0, 5)}</span>
              </div>
              <div className='sidebarVoice'>
                <KeyboardVoiceIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sidebar