import React from 'react';
import './Container.css'
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const Container = () => {
    return (
        <div className="container">
            <LeftContainer></LeftContainer>
            <RightContainer></RightContainer>
        </div>
    );
};

export default Container;