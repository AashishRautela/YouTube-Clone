import React from 'react'
import "../style/CommentSection.css"
import { commentData } from '../constants'
const CommentSection = () => {    
    const Comment=({data})=>{
        const {name,text,replies}=data;
        return(
            <div className="comment">
                <img className="circle-user" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user-image"></img>
                 <div className='comment-user'>
                    <span className='user-name'>
                        {name} |
                    </span>
                    <span className='days'>
                        {Math.floor(Math.random()*(10-1)+1)} Days Ago
                    </span>
                    <p>{text}</p>
                 </div>
            </div>
        )
    }
    const CommentList = ({ comments }) => {
        return (
          comments &&
          comments.map((comment, index) => (
            <div key={index}>
              <Comment data={comment} />
              <div className="comment-replies">
                <CommentList comments={comment.replies} key={index} />
              </div>
            </div>
          ))
        );
      };
      
  return (
    <div className='comments'>
    <h3>{Math.floor(Math.random()*(1000-100)+100)} Comments</h3>
    <div>
    <CommentList comments={commentData}/>
    </div>
    </div>
  )
}

export default CommentSection