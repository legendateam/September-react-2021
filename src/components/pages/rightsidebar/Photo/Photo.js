import React from 'react';

const Photo = ({photos}) => {
    const {title, url} = photos
    return (
        <div>
            <h2>{title}</h2>
            <img src={url} alt={title}/>
        </div>
    );
};

export default Photo;