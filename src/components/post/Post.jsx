import { MoreVert } from '@mui/icons-material'
import  './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'
function Post({post}) {
   
 const [like , setlike] = useState(post.like)
 const [islike , setIslike] = useState(false)

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

 const likeHandler =() => {
     setlike(islike ? like-1 : like +1)
     setIslike(!islike)
 }
  return (
    <div className='post'>
      <div className="postWrapper">
 <div className="postTop">
     <div className="postTopLeft">
          <img className='postProfileImg' src={ PF+Users.filter((u)=> u.id===post?.userId)[0].profilePicture } alt="" />
          <span className='postUserName'>{Users.filter((u)=> u.id===post?.userId)[0].username}</span>
          <span className='postDate' > {post.date}</span>
     </div>
     <div className="postTopRight">
          <MoreVert />
     </div>
 </div>
 <div className="postCenter">
     <span className='postText'>{post?.desc}</span>
     <img className='postImg'  src={PF+post.photo} />
 </div>
 <div className="postBottom">
     <div className="postBottomLeft">
          <img  className="likeIcon"src={`${PF}like.png`} onClick={likeHandler} alt="" />
          <img  className="likeIcon"src={`${PF}heart.jpg`} onClick={likeHandler} alt="" />
        <span className='postlikeCounter'>{like} people like</span>
     </div>
     <div className="postBottomRight">
          <span className='postCommentText'>{post.comment} comments</span>
     </div>
 </div>
      </div>
    </div>
  )
}

export default Post
