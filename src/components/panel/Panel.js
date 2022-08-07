import React from 'react';
import './style.scss';

export default function Panel({ name, description, img }) {
    return (
        <div className='panel'>
            <div className='infos'>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div>
                <img src={img} alt={name} />
            </div>
        </div>
    );
}
