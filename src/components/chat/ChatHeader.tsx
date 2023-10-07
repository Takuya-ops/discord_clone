import React from 'react'
import "./ChatHeader.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          Youtube
        </h3>
      </div>

      <div className='chatHeaderRight'>
        <NotificationsIcon/>
        <PushPinIcon/>
        <PersonIcon/>
        <div className='chatHeaderSearch'>
          <input type='text' placeholder='検索'/>
        <SearchIcon/>
        </div>
        <SendIcon/>
        <HelpIcon/>
      </div>
    </div>
  )
}

export default ChatHeader