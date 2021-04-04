import React, { useState } from 'react';
import {Avatar} from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import './Feed.css'
function Post() {
  const [input, setInput] = useState("")
  const [imageURL, setImageURL] = useState("")
  const submitHandler =(e)=>{
    e.preventDefault ()
    console.log(e)
    setInput ("")
    setImageURL("")
  }

  return (
    <div className="post">
      <div className="post__container">
        <Avatar src="https://styles.redditmedia.com/t5_bkynz/styles/profileIcon_snoo41bc2925-461a-48e1-9960-6b4863af34cc-headshot.png?width=256&height=256&crop=256:256,smart&s=eb99389295bf3d5bff50edc3f6f93f8723debf29"/>
        <form>
        <input className="post__input" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="what's on your mind?"/>
        <input placeholder="image URL"value={imageURL} onChange={(e)=>{setImageURL(e.target.value)}}/>
        <button type="submit" onClick={submitHandler}>hidden submit</button>
        </form>

      </div>
      <div className="post__floot">
        <div className="post__option">
          <VideocamIcon style={{color:"red"}}/>
          <h3>Live Video</h3>
        </div>
        <div className="post__option">
            <PhotoLibraryIcon style={{color:"green"}}/>
            <h3>Photo/Video</h3>
          </div>
          <div className="post__option">
            <InsertEmoticonIcon style={{color:"orange"}}/>
            <h3>Feeling/Activiy</h3>
          </div>
      </div>
    </div>
  )
}

export default Post