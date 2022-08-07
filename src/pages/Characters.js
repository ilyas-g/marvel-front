import { useState, useEffect, React } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Card from '../components/card/Card';

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
                const response = await axios.get(`https://marvelorion2022.herokuapp.com/characters`);
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
                <div className="container content-grid">

                    {data.results.map((character, index) => {
                        const imgSrc = character.thumbnail.path + '.' + character.thumbnail.extension;
                        return (
                            <>
                                <div className="col grid" key={index}>
                                    <Card imgSrc={imgSrc} name={character.name} description={character.description} toChara={`/character/${character._id}`} toComics={`/comics/${character._id}`} />
                                </div>
                            </>
                        );
                    })}
                    <div>
                        <div onClick={nextPage}> Previous Page </div>
                        <div onClick={previousPage}> Next Page </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Characters;
