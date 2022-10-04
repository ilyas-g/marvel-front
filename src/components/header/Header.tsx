import React from 'react';
import './style.scss';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

export default function Header(): JSX.Element | null {
    return (
        <header>
            <div className='headerLeft'>
                <Link to='/'><img className='logo' src={logo} alt="Marvel" /></Link>
                <nav>
                    <ul>
                        <li>
                            <Link to='/characters'>Personnages</Link>
                        </li>
                        <li>
                            <Link to='/comics'>Comics</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
