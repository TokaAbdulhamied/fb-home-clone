import React from 'react'

function Widget() {
  return (
    <div className="widges" style={{margin:"0 auto"}}>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 

      style={{border:"none",overflow:"hidden" , height:"100%",width:"100%" }} 
      scrolling="no" frameborder="0" allowfullscreen="true" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        
    </div>
  )
}

export default Widget
