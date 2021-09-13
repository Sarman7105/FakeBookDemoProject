import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = (props) => {
    return (
        <div>
            <h3 className="postTitle">{props.post.title}</h3>
            <p className="postBody">{props.post.body}</p>
            <Link className="postLink" to={`/postDetails/${props.post.id}`}>See More</Link>
            <hr />
        </div>
    );
};

export default Post;