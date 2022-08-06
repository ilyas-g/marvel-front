import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// https://moderncss.dev/equal-height-elements-flexbox-vs-grid/

export default function Card({ imgSrc, name, description, toChara, toComics }) {
    const truncate = (text) =>
        text.length > 150 ? `${text.substring(0, 120)}...` : text;
    const newDesc = truncate(description);

    return (

        <div className="card gridelement">
            <img src={imgSrc} alt={name} />
            <div className='cardInfos'>
                <h2 className='cardTitle'><Link to={toChara}>{name}</Link></h2>
                <small>{newDesc}</small>
                <Link className="cardButton" to={toComics}>Voir les comics</Link>
            </div>
        </div>
    );
}
