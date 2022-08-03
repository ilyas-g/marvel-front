import { useState, useEffect, React } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Characters() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/characters");
                setData(response.data);
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="App">
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <>
                    {data.results.map((character, index) => {
                        const imgSrc = character.thumbnail.path + '.' + character.thumbnail.extension;
                        return (
                            <div key={index}>
                                <p><Link to={`/character/${character._id}`}>{character.name}</Link></p>

                                <p>{character.description}</p>
                                <img src={imgSrc} alt={character.name} />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default Characters;
