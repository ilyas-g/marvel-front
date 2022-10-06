import React from 'react';
import './style.scss';

interface Props {
    name: string,
    description: string,
    img: string
}

const Panel: React.FC<Props> = ({name, description, img}) => {
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

export default Panel;
