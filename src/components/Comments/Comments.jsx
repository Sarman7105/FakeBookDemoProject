import React,{useState,useEffect, useCallback} from 'react';
import {  useParams } from 'react-router';
import Comment from './Comment'
import './Comments.css'
const Comments = (props) => {
    const params=useParams();
    const url=`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`;
    const [comments,setComments]=useState([]);
    const [isCommentsVisible,setIsCommentsVisible]=useState(false);
    const handleOnClick=()=>{
        setIsCommentsVisible(!isCommentsVisible);
    }
    const getPosts= useCallback(async()=>{
        try{
            const response= await fetch(url);
            const data= await (response.json());
            setComments(data);
        }
        catch(e){
            console.log(e.message)
        }
    },[url])
   
    useEffect(()=>{
        getPosts();
    },[getPosts])
    return (
        <div>
            <div className="commentsAndLikes">
                <div className="Likes">Like</div>
                <div onClick={handleOnClick} className="comments">{comments.length} Comments</div>
            </div>
            {
                isCommentsVisible && 
                <div className="addComment">
                    <input  type="text" placeholder="write comment"></input>
                </div>
                
            }
            {
                isCommentsVisible && comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;