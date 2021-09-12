import React from 'react';
import './User.css'

const User = (props) => {
    return (
        <div className="user">
            {props.user.name}
        </div>
    );
};

export default User;