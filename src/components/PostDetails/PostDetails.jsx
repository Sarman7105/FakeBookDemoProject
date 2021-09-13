import React, {useState,useEffect,useCallback}from 'react';
import { Route, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import './PostDetails.css';

const ProjectDetails = () => {
    const params=useParams();
    const [post, setPost] = useState([]);
    const url='https://jsonplaceholder.typicode.com/posts/'

  const getPost = useCallback(async () => {
      try{
        let response = await fetch(url + params.postId)
        response = await response.json()
        setPost(response)
      }
      catch(e){
            console.log(e.message)
      } 
  }, [params.postId]) 

  useEffect(() => {
    getPost()
  }, [getPost])
    return (
        <div className='home'>
            <div className="container">
              <LeftContainer>
                <div className="img">
                  <img src="https://source.unsplash.com/600x300/?nature,forest" alt="postpicture" />
                </div>
                <h4 className="postTitle">{post.title}</h4>
                <p className="postBody">{post.body}</p>
                <Comments></Comments>
              </LeftContainer>
              <RightContainer/>
            </div>
        </div>
    );
};

export default ProjectDetails;