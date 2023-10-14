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
// import { collection, query } from 'firebase/firestore/lite';
import { collection, query, onSnapshot, DocumentData } from "firebase/firestore";

interface Channel {
  id: string;
  channel: DocumentData;
}

const Sidebar = () => {
  // interfaceで指定した方以外は受け付けないようにする
  const [channels, setChannels] = useState<Channel[]>([])

  const user = useAppSelector((state) => state.user)
  const q = query(collection(db, "channels"))
  
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const channelsResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) => channelsResults.push({
        id: doc.id,
        channel: doc.data(),
      }));
      setChannels(channelsResults)
    });
  }, []);

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
              <AddIcon className='sidebarAddIcon'/>
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