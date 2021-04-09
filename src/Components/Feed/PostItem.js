import { Avatar } from '@material-ui/core'
import React from 'react'
import './Feed.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function PostItem({PP, Name, timestamp, image, content, userName}) {
  return (
    <div className="postItem">
      <div className="postItem__body">
        <Avatar src={PP}/>
        <div className="postItem__info">
          <div className="postItem__name">
            <h4>{Name}</h4>
            <p style={{marginLeft:"2px"}}>{userName}</p>
          </div>
          <p>{new Date (timestamp?.toDate()).toUTCString()}</p>
        </div>
        {/* <span className="postItem__delete">
          <DeleteOutlineIcon />
        </span> */}
        
      </div>
      <div className="postItem__content">
        {content}
      </div>
      <div className="postItem__image">
        {image && <img src={image} width="100%" height="100%" alt="post"/>}
      </div>
      <div className="postItem__options">
        <div className="postItem__option">
          <ThumbUpIcon/>
          <p>Like</p>
        </div>
        <div className="postItem__option">
          <ChatBubbleOutlineIcon/>
          <p>Comment</p>
        </div>
          <div className="postItem__option">
          <NearMeIcon/>
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}

export default PostItem
