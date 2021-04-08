import React, {useContext} from 'react'
import SidebarItem from './SidebarItem';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {UserContext} from '../../store/Provider'
function Sidebar(){
  const [{user}] = useContext (UserContext)

  return (
    <div className="Sidebare">
      <SidebarItem src= {user.photoURL} title= {user.displayName}/> 
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
