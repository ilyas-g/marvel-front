import { useState, useEffect, React } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Characters() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(20);
    const [skip, setSkip] = useState(0);
    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async (limit, skip) => {
            try {
                const response = await axios.get(`http://localhost:3001/characters`);
                setData(response.data);
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData(limit, skip);
    }, [skip, limit]);

    const nextPage = () => {
        setSkip(skip + limit);
    };

    const previousPage = () => {
        setSkip(skip - limit);
    };
    return (
        <div className="App">
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <div className="container">
                    <div className="row">
                        {data.results.map((character, index) => {
                            const imgSrc = character.thumbnail.path + '.' + character.thumbnail.extension;
                            return (
                                <div className="col-md-3" key={index}>
                                    <img className="character" src={imgSrc} alt={character.name} />
                                    <p><Link to={`/character/${character._id}`}>{character.name}</Link></p>
                                    <p><Link to={`/comics/${character._id}`}>Voir les comics</Link></p>

                                    <p>{character.description}</p>
                                </div>
                            );
                        })}
                        <div>
                            <div onClick={nextPage}> Previous Page </div>
                            <div onClick={previousPage}> Next Page </div>
                        </div>
                    </div></div>
            )}
        </div>
    );
}

export default Characters;
