import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>Home
            <br />
            <Link to='/characters'>Personnages</Link>
            <br />
            <Link to='/comics'>Comics</Link>
        </div>
    );
}
