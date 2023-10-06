import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';

const Sidebar = () => {
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
              <h4>プログラミング</h4>
              <AddIcon className='sidebarAddIcon'/>
            </div>
            <div className='sidebarChannelList'>
              <SidebarChannel/>
              <SidebarChannel/>
              <SidebarChannel/>
              <SidebarChannel/>
              <SidebarChannel/>
            </div>
            <div className='sidebarFooter'>
              <div className='sidebarAccount'>
                <img src="./logo512.png" alt=''/>
                <div className='accountName'>
                  <h4>ShinCode</h4>
                  <span>#8162</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar