import React from 'react';
import 'animate.css';

export const GifGridItem = ({title, url}) => {
    return (
        <div className='card animate__flash'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
