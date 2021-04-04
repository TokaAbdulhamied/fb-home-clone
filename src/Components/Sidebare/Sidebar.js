import React from 'react'
import SidebarItem from './SidebarItem';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
  return (
    <div className="Sidebare">
      <SidebarItem src="https://styles.redditmedia.com/t5_bkynz/styles/profileIcon_snoo41bc2925-461a-48e1-9960-6b4863af34cc-headshot.png?width=256&height=256&crop=256:256,smart&s=eb99389295bf3d5bff50edc3f6f93f8723debf29" title="Toka Abdulhamied"/> 
      <SidebarItem Icon={EmojiFlagsIcon} title="Pages"/> 
      <SidebarItem Icon={PeopleIcon} title="Friends"/> 
      <SidebarItem Icon={ChatIcon} title="Messenger"/> 
      <SidebarItem Icon={VideoLibraryIcon} title="Videos"/> 
      <SidebarItem Icon={StorefrontIcon} title="Marketplace"/> 
      <SidebarItem Icon={ExpandMoreIcon} title=""/>
    </div>
  )
}

export default Sidebar
