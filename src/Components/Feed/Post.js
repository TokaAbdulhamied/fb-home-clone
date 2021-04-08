import React, { useState, useContext } from 'react';
import {Avatar} from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import {UserContext} from '../../store/Provider'
import './Feed.css'
function Post() {
  const [{user}] = useContext (UserContext)
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
        <Avatar src={user.photoURL}/>
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