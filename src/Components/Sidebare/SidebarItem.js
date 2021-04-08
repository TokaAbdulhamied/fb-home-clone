import { Avatar } from '@material-ui/core'
import React from 'react'
import  './Sidebar.css';

function SidebarItem({title, Icon, src}) {
  return (
    <div className="sidebarItem">
      {/* conditional rendering */}
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarItem
