import React, { useEffect, useState } from 'react';
import { Link,Route } from 'react-router-dom';
import LeftContainer from '../Container/LeftContainer';
import RightContainer from '../Container/RightContainer';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
    const [posts,setPosts]=useState([]);
    const url='https://jsonplaceholder.typicode.com/posts';
    const getPosts= async()=>{
        try{
            const response= await fetch(url);
            const data= await (response.json());
            setPosts(data);
        }
        catch(e){
            console.log(e.message)
        }
    }
   
    useEffect(()=>{
        getPosts();
    },[])
    return (
        <div className="home">
            <div className="container">
                <LeftContainer>
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
                </LeftContainer>
                <RightContainer/>
            </div>
            
            
        </div>
    );
};

export default Home;