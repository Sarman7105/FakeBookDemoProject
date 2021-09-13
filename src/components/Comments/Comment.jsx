import React from 'react';

const Comment = (props) => {
    return (
        <div className="comment">
            <h3>User {props.comment.id}</h3>
            <p>{props.comment.body}</p>
        </div>
    );
};

export default Comment;