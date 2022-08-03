import React from 'react';
import './style.scss';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

export default function Header({ onClick, onSubmit }) {
    return (
        <header>
            <div className='headerLeft'>
                <img className='logo' src={logo} alt="Marvel" />
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
            <form onSubmit={onSubmit}>
                <input type="search" placeholder="Search Comics, Characters, Etc"></input>
                <input type="submit" value="Search" onClick={onClick} />
            </form>
        </header>
    );
}
