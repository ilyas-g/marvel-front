import React from 'react';
import './style.scss';

import { ReactComponent as ReactLogo } from '../../assets/images/fav-on.svg';

export default function Panel({ name, description, img }) {
    return (
        <div className='panel'>
            <div className='infos'>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className='panel-block-image'>
                <img className='panel-img' src={img} alt={name} />
                <button className='favBtn'><ReactLogo /></button>
            </div>
        </div>
    );
}
